import React, { useContext } from "react";

import { CardsArea, ChartsRow, DashboardFilterArea, DashboardHeader, DashboardWrapper, MetricProducts } from "./styles";
import { GlobalContext } from '../../contexts/global';
import Card from './components/Card';
import InputWithIcon from '../../components/InputWithIcon';
import SearchIcon from '../../assets/icons/search.png';
import DefaultDashboardContainer from "./components/DefaultDashboardContainer";
import BarCharts from "./components/BarChart";
import PieChart from "./components/PieChart";

export default function Dashboard() {
  const { user } = useContext(GlobalContext);

  const dates = ['01/2023', '02/2023', '03/2023', '04/2023', '05/2023'];

  const metricsHeader = ['Parceiros', 'Estoque', 'Qtd. Últ-Entrada', 'Qtd. Últ-Saída']

  const metricsBody = [
    ['Hippo', '7.000 un.', '36 un.', '13 un.'],
    ['Zaffari', '550 un.', '32 un.', '12 un.'],
    ['Super Pão', '357 un.', '37 un.', '10 un.'],
  ];

  return (
    
    <DashboardWrapper>
          <PageContainer>
        </PageContainer>
      <DashboardHeader >
        <div>
          <h2>Olá, {user.name}</h2>
          <small>Bem vindo(a) de volta!</small>
        </div>
        <img src={user.avatar} alt={user.name} />
      </DashboardHeader>

      <DashboardFilterArea>
        <div>
          <label>Filtrar:</label>
          <div>
            <select>
              {dates.map(date => <option key={date} value={date}>{date}</option>)}
            </select>

            <span />

            <select>
              {dates.map(date => <option key={date} value={date}>{date}</option>)}
            </select>
          </div>
        </div>
       
      </DashboardFilterArea>

      <CardsArea>
      
        <div className="cards">
        <div>
          
          <InputWithIcon
            placeholder="Filtre por produto"
            right={{ src: SearchIcon }}
          />
        </div>

        <ChartsRow>
        <BarCharts />
      </ChartsRow>
      <PieChart />

      <div className="cardRow" >

<Card
    title="Clientes Importados"
    value="4 clientes" gains={-50}
    detail="8 clientes - último mês"
  />
</div>

          
            <Card
              title="Total Geral de Produtos Importados"
              value="1278 un." gains={2.5}
              detail="1034 un. - último mês"
            />

            <Card
              title="Total Geral de Produtos Únicos"
              value="1112 un." gains={0.5}
              detail="1050 un. - último mês"
            />
            <Card title="Importações Realizadas Hoje" value="12 unidades." noComparison />

            <Card
              title="Clientes Importados"
              value="4 clientes" gains={-50}
              detail="8 clientes - último mês"
            />
          
          <DefaultDashboardContainer title="Resumo do Produto">
          <h3>Coca Cola 2L</h3>
          <ul>
            <li>
              Parceiro: <select>
                <option>Hippo</option>
                <option>Zaffari</option>
                <option>Super Pão</option>
                <option>Armazém do Grão</option>

              </select>
            </li>

            <li>Categoria: Mercearia</li>
            <li>Exportador: Brand Distribuição</li>
            <span />

            <li>Data Entrada: 09/02/23</li>
            <li>Data Saída: 09/02/23</li>
            <span />

            <li>Preço Entrada: R$14,48</li>
            <li>Preço Saída: R$15,57</li>
          </ul>
        </DefaultDashboardContainer>

        </div>

      
      </CardsArea>

      

      <MetricProducts>
        <h2>Métricas do Produto</h2>
        <table>
          <thead>
            <tr>{metricsHeader.map((th, index) =>
              <React.Fragment key={index}>
                <th>{th}</th>
                {index === 0 && <th></th>}
              </React.Fragment>
            )}</tr>
          </thead>

          <tbody>
            {metricsBody.map((tr, index) =>
              <tr key={index}>
                {tr.map((td, tdIndex) =>
                  <React.Fragment key={tdIndex}>
                    <td>{td}</td>
                    {tdIndex === 0 }
                    
                  </React.Fragment>
                )}
              </tr>
            )}
          </tbody>
        </table>
      </MetricProducts>
    </DashboardWrapper>
  )
}