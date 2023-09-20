import React,{useEffect, useRef} from 'react';
import Chart from '../Components/Echarts';

function MainPage():JSX.Element{
 return(
    <div>
      <h2>echarts-for-react 라이브러리 사용하여 차트 생성하기</h2>
      <Chart />
    </div>
 )
}

export default MainPage;