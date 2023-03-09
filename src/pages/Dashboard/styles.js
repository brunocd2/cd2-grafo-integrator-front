import styled from "styled-components";

export const DashboardWrapper = styled.main`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  flex: 1;
  max-height: 100vh;
  overflow-x: auto;

  @media (max-width: 800px) {
    padding: 0.5rem;
  }
`

export const DashboardHeader = styled.header`
  width: 100%;
  display: flex;
  margin-top: 10%;

  h1 {
    font-size: 24px;
    color: var(--black);

    @media(max-width: 400px) {
      font-size: 20px;
    }

    @media(max-width: 350px) {
      font-size: 18px;
    }
  }

  small {
    font-family: 'Poppins', sans-serif;
    font-size: 10px;
    font-weight: 600;
    color: var(--gray3);

    @media(max-width: 350px) {
      font-size: 12px;
    }
  }

  img {
    width: 56px;
    border-radius: 100%;

    @media (max-width: 800px) {
      margin-right: 4rem;
    }
  }
`

export const DashboardFilterArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;

  @media (max-width: 800px) {
    flex-direction: column;
    margin: 1rem 0;
  }

  > div.search {
    margin-left: 10px;

    @media (max-width: 800px) {
      width: 100%;
      margin-left: 0;
      margin-top: 1rem;
    }
  }

  div {
    display: flex;
    align-items: center;

    > label {
      font-size: 10px;
      margin-right: 12px;
      color: var(--black2);
    }

    > label > input{
      height: 32px;
      width: 150px;
      margin-left: 0;
      background-color: var(--bg-gray);
    }
  }

  span {
    margin: 0.5rem;
    background-color: var(--gray4);
    height: 1px;
    width: 1rem
  }
`

export const CardsArea = styled.section`
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
  }
  
  div.cards {
    width: 100%;

    div.cardRow {
      @media (max-width: 800px) {
        flex-direction: column;
      }

      display: flex;
      flex: 1;
    }

    div.card {
      padding: 1rem;
      border: 1px solid #E7E8F2;
      background-color: #FFFFFF;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      font-family: 'Poppins', sans-serif;
      margin-bottom: 20px;
      flex: 1;

      @media (max-width: 800px) {
        margin-right: 0;
      }

      h3 {
        font-size: 14px;
        margin-bottom: 1rem;
      }

      span {
        display: flex;
        align-items: center;
        font-size: 22px;
        color: var(--branding);
        font-weight: bold;
        margin-bottom: 4px;

        img {
          margin-left: 4px;
        }
      }

      span.profit, span.loss {
        margin-left: 12px;
        font-size: 16px;
        font-weight: 400;
      }

      span.profit {
        color: var(--dark-green);
      }

      span.loss {
        color: var(--red);
      }

      small {
        font-size: 13px;
        color: var(--gray4);
      }
    }
  }
`

export const DefaultDashboardWrapper = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: #FFFFFF;
  border: 1px solid #E7E8F2;
  border-radius: 6px;
  margin-bottom: 20px;
  flex: ${props => props.isBarChart ? 1 : '0'};
  
  select.chart {
    margin: 1rem 0;
  }

  header {
    display: flex;
    border-bottom: 1px solid #E7E8F2;
    padding: 14px;

    h3 {
      font-weight: 500;
      font-size: 10px;
      margin-right: auto;
      color: var(--branding);
    }

    > span {
      color: #A7A9C0;
      font-weight: bold;
      cursor: pointer;
    }
  }

  div.content {
    padding: 0 40px;
    padding-bottom:50px; 
    padding-top: ${props => props.isBarChart ? '2rem' : '0'};

    h3 {
      font-family: 'Inter';
      font-weight: 500;
      font-size: 10px;
      text-align: center;
      margin: 1rem 0;
    }

    select {
      margin-bottom: 0.5rem;
      width:80%
    }

    span {
      margin: 1rem;
    }

    li {
      font-family: "Inter";
      font-size: 10px;
      font-weight: 500;
    }
  }

  legend.pieChartLegend {
    display: flex;

    div > span {
      margin: 0;
      margin-bottom: 4px;
    }
  }
`

export const PieChartLegendValue = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  flex: 1;
  font-family: 'Inter', sans-serif;
  z-index: 2;

  &:not(:last-child) {
    border-right: 1px solid #E7E8F2;
  }

  span:first-child {
    color: ${props => props.color};
    font-size: 13px;
    font-weight: 500;
  }

  span:last-child {
    font-size: 13px;
    color: var(--gray4);
    border-right: 0;
  }
`

export const ChartsRow = styled.section`
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`

export const MetricProducts = styled.section`
  padding-top: 1.5rem;

  h2 {
    display: inline;
    color: var(--branding);
    font-size: 20px;
    border-bottom: 1px solid var(--branding);
  }

  table {
    width: 100%;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    margin: 1rem 0;

    th {
      color: var(--gray3);
      font-size: 10px;
      text-align: start;

      @media (max-width: 800px) {
        font-size: 13px;
      }

      &.divider {
        @media (max-width: 800px) {
          display: none;
        }
      }
    }

    td {
      font-size: 13px;
      color: var(--black2);
      padding-top: 0.8rem;

      @media (max-width: 800px) {
        font-size: 0.8rem;
      }

      &.divider {
        display: flex;
        width: 100px;
        height: 1px;
        background-color: var(--gray4);
        padding-top: 0;       
        margin-top: 25px;
        
        @media (max-width: 800px) {
          display: none;
        }
      }
    }
  }
`