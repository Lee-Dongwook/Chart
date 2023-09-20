import React,{useEffect, useRef} from 'react';
import Chart from '../Components/Echarts';
import LineChart from '../Components/Theme/line-charts';

function MainPage():JSX.Element{
 return(
    <div>
      <table>
        <tr>
          <h2>echarts-for-react 라이브러리 사용하여 차트 생성하기</h2>
          <Chart />
        </tr>
        <br />
        <br />
        <br />
        <tr>
          <h2>echarts의 registerTheme을 적용한 차트 테마 적용하기</h2>
          <LineChart />
        </tr>
      </table>
      
   
    </div>
 )
}

export default MainPage;