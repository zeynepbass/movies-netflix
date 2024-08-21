import React, { useEffect, useState } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import './veri.css';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
const Veri = () => {
  const [chartOptions, setChartOptions] = useState({
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: 'Website New Movies',
    },
    data: [
      {
        type: 'pie',
        startAngle: 75,
        toolTipContent: '<b>{label}</b>',
        showInLegend: 'true',
        legendText: '{label}',
        indexLabelFontSize: 16,
        indexLabel: '{label}',
        dataPoints: [],
      },
    ],
  });
  function getRandomRedColor() {

    const red = Math.floor(Math.random() * (255 - 120 + 1)) + 120;

    return `rgb(${red}, 0, 0)`;
  }
  useEffect(() => {

    async function fetchDataFromAPI() {
      try {
        const response = await fetch('/post/panel');
        const data = await response.json();

   
        if (Array.isArray(data) && data.length > 0) {

          const counts = {
            top10: {},
            yeni: {},
            id: {}
          };
          data.forEach(item => {
            counts.top10[item.top10] = (counts.top10[item.top10] || 0) + 1;
            counts.yeni[item.yeni] = (counts.yeni[item.yeni] || 0) + 1;           
          });
          const apiDataPoints = Object.entries(counts).map(([label, values]) => ({
            y: Object.values(values).length,
            label: `${Object.entries(values).map(([value, count]) => `${value} (${count})`)}`,
            color: getRandomRedColor(),
          }));
          setChartOptions(prevOptions => ({
            ...prevOptions,
            data: [
              {
                ...prevOptions.data[0],
                dataPoints: apiDataPoints,
              },
            ],
          }));
        } else {
          console.error('API\'den beklenen veri formatı alınamadı:', data);
        }
      } catch (error) {
        console.error('API\'den veri çekme hatası:', error);
      }
    }
    fetchDataFromAPI();
  }, []); 
  return (
    <div>
      <CanvasJSChart options={chartOptions} />
    </div>
  );
};

export default Veri;
