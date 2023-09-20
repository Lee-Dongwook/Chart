import React,{useEffect, useRef} from 'react'
import EChartsReact from 'echarts-for-react'

const RealTimeChart = (): JSX.Element => {
  const chartRef = useRef<EChartsReact | null>(null);
  
  useEffect(() => {
    const myChart = chartRef.current?.getEchartsInstance();
    
    if(myChart){
        const option = {
            title:{
                text: '수익 비율 확인',
            },

            tooltip: {
                trigger: 'axis',
                axisPointer:{
                    type: 'cross',
                    label: {
                        backgroundColor: '#283b56',
                    },
                },
            },

            legend: {
                data: ['순수익','총 수익'],
            },
            
            dataZoom:{
                show: false,
                start: 0,
                end: 100,
            },

            xAxis: [
                {
                    type: 'category',
                    boundaryGap: true,
                    data:(function(){
                        let nowDate = new Date();
                        let result = []
                        let len = 20;
                        while(len--){
                            result.unshift(nowDate.toLocaleTimeString().replace(/^\D*/, ''));
                        }
                        return result;
                    })(),
                }
            ],

            yAxis: [
                {
                    type: 'value',
                    scale: true,
                    name: '순수익',
                    max: 30,
                    min: 0,
                    boundaryGap: [0.2, 0.2],
                    axisLabel:{
                        formatter: '{value} %',
                    },
                },

                {
                    type: 'value',
                    scale: true,
                    name: '총 수익',
                    max: 1200,
                    min: 0,
                    boundaryGap: [0.2, 0.2],
                },
            ],
            series:[
                {
                    name: '순수익',
                    type: 'line',
                    lineStyle:{
                        color: '#2A265C',
                    },
                    smooth: true,
                    yAxisIndex: 0,
                    data: (function(){
                        let result = [];
                        let len = 0;
                        while(len < 20){
                            result.push((Math.random() * 10 + 5));
                            len++;
                        }
                        return result;
                    })(),
                },
                {
                    name: '총 수익',
                    type: 'bar',
                    lineStyle:{
                        color: '#EEAD00',
                    },
                    yAxisIndex: 1,
                    data: (function(){
                        let result = [];
                        let len = 0;
                        while(len--){
                            result.push(Math.round(Math.random() * 1000));
                        }
                        return result;
                    })(),
                },
            ],
        };

        myChart.setOption(option);

        const intervalId = setInterval(() => {
            const axisData = new Date().toLocaleTimeString().replace(/^\D*/, '');

            const data0 = option.series[0].data;
            const data1 = option.series[1].data;

            data0.shift();
            data0.push(Math.round(Math.random() * 1000));
            
            data1.shift();
            data1.push((Math.random() * 10 + 5));

            option.xAxis[0].data.shift();
            option.xAxis[0].data.push(axisData);

            myChart.setOption(option);
        }, 2100);

        return () => clearInterval(intervalId);
    }
  },[]);

  return(
    <EChartsReact ref={chartRef} option={{}} style={{height: '400px'}} />
  )
}

export default RealTimeChart;
