import React,{useEffect, useRef} from 'react';
import Chart from '../Components/Echarts';
import LineChart from '../Components/Theme/line-charts';
import PieChart from '../Components/Type/PieCharts';

function MainPage():JSX.Element{
 return(
    <div>
      <div>
      <table>
        <td>
          <h2>echarts-for-react 라이브러리 사용하여 차트 생성하기</h2>
          <Chart />
        </td>
        <td>
          <h2>echarts의 registerTheme을 적용한 차트 테마 적용하기</h2>
          <LineChart />
        </td>
      </table>
      </div>
      <div style={{marginTop: '15%'}}>
      <h2>다양한 종류의 차트</h2>
      <PieChart />
      </div>
      
    </div>
 )
}

export default MainPage;