import React from "react";
import ReactECharts from "echarts-for-react";

const LineChart = () => {
  const data = [20, 50, 80, 45, 60];

  const option: echarts.EChartsOption = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: data,
        type: "line",
      },
    ],
  };

  return (
    <ReactECharts option={option} style={{ width: "100%", height: "400px" }} />
  );
};

export default LineChart;
