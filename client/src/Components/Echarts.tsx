import React, {useState, useEffect} from 'react';
import ECharts, {EChartsReactProps} from 'echarts-for-react';

const Chart = ():JSX.Element => {
 const [options, setOptions] = useState({
    xAxis: {
     type:'category',
     data: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
    },
    yAxis: {
        type: 'value'
    },
    series:[
        {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
        }
    ]
});



return(
  <ECharts option={options} opts={{renderer: 'svg', width: 600, height: 600}} />
)
}

export default Chart