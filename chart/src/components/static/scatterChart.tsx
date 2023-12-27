import React from "react";
import ReactECharts from "echarts-for-react";

const ScatterChart = () => {
  const data = [
    [10, 20],
    [15, 15],
    [20, 45],
    [25, 35],
    [30, 10],
    [35, 40],
    [40, 70],
    [45, 30],
    [50, 80],
  ];

  const option: echarts.EChartsOption = {
    xAxis: {},
    yAxis: {},
    series: [
      {
        data: data,
        type: "scatter",
      },
    ],
  };

  return (
    <ReactECharts option={option} style={{ width: "100%", height: "400px" }} />
  );
};

export default ScatterChart;
