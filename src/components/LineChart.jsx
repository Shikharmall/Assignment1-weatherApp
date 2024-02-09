// LineChart.js
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ chartData }) => {
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    // Ensure the chart is destroyed before re-rendering
    if (chartInstance) {
      chartInstance.destroy();
    }

    // Render the chart
    const ctx = document.getElementById('lineChartCanvas').getContext('2d');
    const newChartInstance = new Line(ctx, {
      data: chartData,
      options: {
        scales: {
          x: {
            type: 'category',
            position: 'bottom',
          },
          y: {
            type: 'linear',
            position: 'left',
          },
        },
      },
    });

    setChartInstance(newChartInstance);

    // Clean up the chart on component unmount
    return () => {
      newChartInstance.destroy();
    };
  }, [chartData]);

  return (
    <div>
      <h2>Line Chart</h2>
      <canvas id="lineChartCanvas" width="400" height="200"></canvas>
    </div>
  );
};

export default LineChart;
