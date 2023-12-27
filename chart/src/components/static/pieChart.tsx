import React from "react";
import ReactECharts from "echarts-for-react";

const PieChart = () => {
  const data = [
    { value: 20, name: "Mon" },
    { value: 50, name: "Tue" },
    { value: 80, name: "Wed" },
    { value: 45, name: "Thr" },
    { value: 60, name: "Fri" },
  ];

  const option: echarts.EChartsOption = {
    tooltip: {
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    series: [
      {
        data: data,
        type: "pie",
      },
    ],
  };

  return (
    <ReactECharts option={option} style={{ width: "100%", height: "400px" }} />
  );
};

export default PieChart;
