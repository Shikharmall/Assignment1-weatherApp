import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const LineCart = ({ pastWeatherData ,unit}) => {

  const chartLabels = pastWeatherData.map((item) => {
    const timePart = item.time.split(' ')[1];
    return timePart;
  });
  
  const chartTempC = pastWeatherData.map((item) => item.temp_c);
  const chartTempF = pastWeatherData.map((item) => item.temp_f);

  const data =
  unit === 'C'
    ? {
        labels: chartLabels,
        datasets: [
          {
            label: "Temperature",
            data: chartTempC,
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 2,
            fill: false,
          },
        ],
      }
    : {
      labels: chartLabels,
      datasets: [
        {
          label: "Temperature",
          data: chartTempF,
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 2,
          fill: false,
        },
      ],
    };

  return (
    <div className="w-full m-5">
      <h3 style={{ fontFamily: "Fahkwang" }}>Past Weathers</h3>
      <Line data={data} />
    </div>
  );
};

export default LineCart;
