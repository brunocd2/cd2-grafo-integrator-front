import DefaultDashboardContainer from './DefaultDashboardContainer';
import { Chart } from 'react-google-charts'
import { useState } from 'react';
import { PieChartLegendValue } from '../styles';

export default function PieChart({}) {
  const [data, setData] = useState([
    ["Parceiro", "Vendas"],
    ["Hippo", 60],
    ["Zaffari", 25,],
    ["Super pão", 15],
  ])

  const [chartPieLegend, setChartPieLegend] = useState([
    {label: "Hippo", value: "60", color: "#4E73DF"},
    {label: "Zaffari", value: "25", color: "#00ADDD"},
    {label: "Super Pão", value: "15", color: "#784ede"},
  ]);
  
  const options = {
    pieHole: 0.4,
    colors: ["#784EDE", "#00ADDD", "#4E73DF"],
    legend: 'none',
    pieSliceTextStyle: {
      fontSize: 18,
    },
    pieSliceText: 'value',
    chartArea: {
      width: '100%',
      height: '80%'
    }
  };
  
  return (
    <DefaultDashboardContainer title="Qtd. Entradas por Parceiro (un)" isChart isPieChart>
      <Chart
        chartType='PieChart'
        data={data}
        options={options}
        width="100%"
        height="250px"
      />

      <legend className='pieChartLegend'>
        {chartPieLegend.map((partner, index) =>
          <PieChartLegendValue
            key={index}
            color={partner.color}
          >
            <span>{partner.value}</span>
            <span>{partner.label}</span>
          </PieChartLegendValue> 
        )}
      </legend>
    </DefaultDashboardContainer>
  )
}