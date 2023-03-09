import { Chart } from 'react-google-charts';

import DefaultDashboardContainer from './DefaultDashboardContainer';

export default function BarChart() {
  const windowWidth = window.screen.width;

  const data = [
    ['', 'Última Entrada (un)', 'Última Saída (un)'],
    ['Set', 450, 190],
    ['Out', 380, 120],
    ['Nov', 300, 420],
    ['Dez', 150, 280],
    ['Jan', 105, 195],
    ['Fev', 405, 250],
  ]

  const options = {
    colors: ["#4E73DF", "#4BD4FA"],
    legend: {
      // textStyle: {color: 'blue'}
      position: windowWidth < 800 ? 'none' : 'top'
    }
  }

  return (
    <DefaultDashboardContainer title="Fluxo de Entrada e Saída" isChart isBarChart>
      {/* <select className='chart'>
        <option>Mês Inicial</option>
        <option>Mês Final</option>
      </select> */}

      <Chart
        chartType='Bar'
        data={data}
        options={{ ...options }}
        width="100%"
        height="250px"
      />
    </DefaultDashboardContainer>
  )
}