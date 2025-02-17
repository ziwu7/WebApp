import 'echarts-jsx/dist/renderers/SVG';
import 'echarts-jsx/dist/components/geo';

import { DataObject } from 'dom-renderer';
import { EChartsOption, EChartsType, init, registerMap } from 'echarts';
import { observable } from 'mobx';
import { attribute, component, observer,WebCell } from 'web-cell';
import { formatDate } from 'web-utility';

import { getHistory, Province } from '../../../service/Epidemic';
import { long2short } from '../adapter';

export interface EChartsMapProps {
    /**
     * 地图 JSON 文件地址
     */
    mapUrl?: string;
    /**
     * Echarts 中的所有 options（注意：地图的 map 项值为 'map'）
     */
    chartOptions?: EChartsOption;
    mapName?: string;
    /**
     * 点击地图后的回调函数
     */
    onSeriesClick?: (event: CustomEvent<DataObject>) => any;
    /**
     * 地图缩放事件回调函数
     */
    onChartGeoRoam?: (event: CustomEvent<DataObject>) => any;
    onChartLabelAdjust?: (event: CustomEvent<EChartsType>) => any;
}

export interface EChartsMap extends WebCell<EChartsMapProps> {}

/**
 * WebCell ECharts 热力图-地图可视化通用组件
 *
 * 本地图组件为热力图-地图定制化开发提供了最高的自由度
 *
 * @author shadowingszy
 */
@component({ tagName: 'echarts-map' })
@observer
export class EChartsMap
    extends HTMLElement
    implements WebCell<EChartsMapProps>
{
    @attribute
    @observable
    accessor mapUrl = '';

    @attribute
    @observable
    accessor mapName = 'map';

    @observable
    accessor chartOptions: EChartsOption = {};

    chart: EChartsType;

    mountedCallback() {
        this.classList.add('w-100', 'h-100');

        this.chart = init(this);

        this.listen();
        this.loadData();

        self.addEventListener('resize', () => {
            this.chart.resize();

            this.adjustLabel();
        });
    }

    adjustLabel() {
        this.emit('chartlabeladjust', this.chart);
    }

    listen() {
        const { chart, chartOptions } = this;
        const { data } = chartOptions.baseOption.timeline;
        // implement hover-then-click on mobile devices
        let hovered = '';

        chart
            .on('mouseover', 'series', ({ name }) => {
                // prevent click event to trigger immediately
                setTimeout(() => (hovered = name));
            })
            .on('mouseout', 'series', () => {
                hovered = '';
            })
            .on('click', 'series', params => {
                if (hovered) {
                    this.emit('seriesclick', params);
                    hovered = '';
                }
            })
            .on('click', 'timeline', ({ dataIndex }) => {
                const formattedDate = formatDate(dataIndex, 'YYYY-MM-DD');
                chart.dispatchAction({
                    type: 'timelineChange',
                    // index of time point
                    currentIndex: data.findIndex(d => d === dataIndex)
                });
                getHistory(formattedDate).then(this.updateChartData);
            });
    }

    async loadData() {
        const { chart, mapUrl, mapName } = this;

        chart.showLoading();

        const data = await (await fetch(mapUrl)).json();

        for (const { properties } of data.features)
            properties.name = long2short(properties.name);

        registerMap(mapName, data);
    
        this.adjustLabel();
        chart.hideLoading();
    }
    render() {
        const options = this.chartOptions;

        return (
            <ec-svg-renderer>
                <ec-geo
                    map={this.mapName}
                    data={options.options[0].series[0]?.data}
                />
            </ec-svg-renderer>
        );
    }
    updateChartData = (newData: Province[]) =>
        this.chart.setOption({
            series: [
                {
                    data: newData.map(item => ({
                        name: item.provinceShortName,
                        value: item.confirmedCount
                    }))
                }
            ]
        });
}
