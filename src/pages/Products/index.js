import { useContext, useEffect, useState } from "react";

import PageContainer from "../../components/PageContainer";
import { FilterArea, FilterButton, ModalContent, ModalButton, ShowPerPageArea } from "./styles";
import FilterIcon from '../../assets/icons/filter.png';
import ExcelIcon from '../../assets/icons/excel.png';
import SearchIcon from '../../assets/icons/search.png';
import InputWithIcon from "../../components/InputWithIcon";
import Table from "../../components/Table";
import Pagination from "./Pagination";
import Modal from "../../components/Modal";
import { GlobalContext } from "../../contexts/global";
import { useParams } from "react-router-dom";

export default function Products() {
  const [modalOpened, setModalOpened] = useState(false);
  const [showPerPage, setShowPerPage] = useState(10);
  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState('');
  const [body, setBody] = useState([]);
  const { products } = useContext(GlobalContext);
  const { filterType, filter } = useParams();
  const title = filterType ? `Produtos - ${filterType}: ${filter}` : 'Produtos Cadastrados'
  
  // const database = [
    //   ['1','1000 - 21465 - BARRA DE CHOCOLATE BELGA AO LEITE ACONDICIONADO EM CAIXAS CONTENDO 12 UNIDADES DE 100GR CADA CACHET KIMS CHOCOLATE','25412956214650','574512','CHOC BARRA AO LEITE CACHET 100g','Kims Chocolates','Chocolate', '0', '0', 'Hippo', '0', '0', '0', '0', '0', '0', '0'],
    //   ['2','1001 - 21464 - BARRA DE CHOCOLATE SUIÇA 85% CACAU ACONDICIONADO EM CAIXAS CONTENDO 12 UNIDADES DE 100GR CADA CACHET KIMS CHOCOLATE','25412956214643','618961','CHOC BARRA 85 CACAU CACHET 100g', 'Kims Chocolates', 'Chocolates', '0', '0', 'Zaffari', '0', '0', '0', '0', '0', '0', '0'],
  //   ['3','1002 - 21465 - BARRA DE CHOCOLATE BELGA AO LEITE ACONDICIONADO EM CAIXAS CONTENDO 12 UNIDADES DE 100GR CADA CACHET KIMS CHOCOLATE','25412956214650','574512','CHOC BARRA AO LEITE CACHET 100g','Domazzi Chocolates','Chocolate', '0', '0', 'Super Pão', '0', '0', '0', '0', '0', '0', '0'],
  //   ['4','1002 - 21465 - BARRA DE CHOCOLATE BELGA AO LEITE ACONDICIONADO EM CAIXAS CONTENDO 12 UNIDADES DE 100GR CADA CACHET KIMS CHOCOLATE','25412956214650','574512','CHOC BARRA AO LEITE CACHET 100g','Kims Chocolates','Chocolate', '0', '0', 'Hippo', '0', '0', '0', '0', '0', '0', '0'],
  //   ['5','1002 - 21465 - BARRA DE CHOCOLATE BELGA AO LEITE ACONDICIONADO EM CAIXAS CONTENDO 12 UNIDADES DE 100GR CADA CACHET KIMS CHOCOLATE','25412956214650','574512','CHOC BARRA AO LEITE CACHET 100g','Kims Chocolates','Chocolate', '0', '0', 'Zaffari', '0', '0', '0', '0', '0', '0', '0'],
  //   ['6','1002 - 21465 - BARRA DE CHOCOLATE BELGA AO LEITE ACONDICIONADO EM CAIXAS CONTENDO 12 UNIDADES DE 100GR CADA CACHET KIMS CHOCOLATE','25412956214650','574512','CHOC BARRA AO LEITE CACHET 100g','Kims Doces','Doces', '0', '0', 'Super Pão', '0', '0', '0', '0', '0', '0', '0'],
  //   ['7','1002 - 21465 - BARRA DE CHOCOLATE BELGA AO LEITE ACONDICIONADO EM CAIXAS CONTENDO 12 UNIDADES DE 100GR CADA CACHET KIMS CHOCOLATE','25412956214650','574512','CHOC BARRA AO LEITE CACHET 100g','Kims Chocolates','Chocolate', '0', '0', 'Hippo', '0', '0', '0', '0', '0', '0', '0'],
  //   ['8','1002 - 21465 - BARRA DE CHOCOLATE BELGA AO LEITE ACONDICIONADO EM CAIXAS CONTENDO 12 UNIDADES DE 100GR CADA CACHET KIMS CHOCOLATE','25412956214650','574512','CHOC BARRA AO LEITE CACHET 100g','Kims Chocolates','Chocolate', '0', '0', 'Zaffari', '0', '0', '0', '0', '0', '0', '0'],
  //   ['9','1002 - 21465 - BARRA DE CHOCOLATE BELGA AO LEITE ACONDICIONADO EM CAIXAS CONTENDO 12 UNIDADES DE 100GR CADA CACHET KIMS CHOCOLATE','25412956214650','574512','CHOC BARRA AO LEITE CACHET 100g','Kims Chocolates','Chocolate', '0', '0', 'Super Pão', '0', '0', '0', '0', '0', '0', '0'],
  //   ['10','1002 - 21465 - BARRA DE CHOCOLATE BELGA AO LEITE ACONDICIONADO EM CAIXAS CONTENDO 12 UNIDADES DE 100GR CADA CACHET KIMS CHOCOLATE','25412956214650','574512','CHOC BARRA AO LEITE CACHET 100g','Kims Chocolates','Chocolate', '0', '0', 'Hippo', '0', '0', '0', '0', '0', '0', '0'],
  //   ['11','1002 - 21465 - BARRA DE CHOCOLATE BELGA AO LEITE ACONDICIONADO EM CAIXAS CONTENDO 12 UNIDADES DE 100GR CADA CACHET KIMS CHOCOLATE','25412956214650','574512','CHOC BARRA AO LEITE CACHET 100g','Kims Chocolates','Chocolate', '0', '0', 'Zaffari', '0', '0', '0', '0', '0', '0', '0'],
  //   ['12','1002 - 21465 - BARRA DE CHOCOLATE BELGA AO LEITE ACONDICIONADO EM CAIXAS CONTENDO 12 UNIDADES DE 100GR CADA CACHET KIMS CHOCOLATE','25412956214650','574512','CHOC BARRA AO LEITE CACHET 100g','Kims Chocolates','Chocolate', '0', '0', 'Hippo', '0', '0', '0', '0', '0', '0', '0'],
  //   ['13','1002 - 21465 - BARRA DE CHOCOLATE BELGA AO LEITE ACONDICIONADO EM CAIXAS CONTENDO 12 UNIDADES DE 100GR CADA CACHET KIMS CHOCOLATE','25412956214650','574512','CHOC BARRA AO LEITE CACHET 100g','Kims Chocolates','Chocolate', '0', '0', 'Hippo', '0', '0', '0', '0', '0', '0', '0'],
  //   ['14','1002 - 21465 - BARRA DE CHOCOLATE BELGA AO LEITE ACONDICIONADO EM CAIXAS CONTENDO 12 UNIDADES DE 100GR CADA CACHET KIMS CHOCOLATE','25412956214650','574512','CHOC BARRA AO LEITE CACHET 100g','Kims Chocolates','Chocolate', '0', '0', 'Zaffari', '0', '0', '0', '0', '0', '0', '0'],
  //   ['15','1002 - 21465 - BARRA DE CHOCOLATE BELGA AO LEITE ACONDICIONADO EM CAIXAS CONTENDO 12 UNIDADES DE 100GR CADA CACHET KIMS CHOCOLATE','25412956214650','574512','CHOC BARRA AO LEITE CACHET 100g','Kims Chocolates','Chocolate', '0', '0', 'Hippo', '0', '0', '0', '0', '0', '0', '0'],
  // ]
  const [header, setHeader] = useState(
    // ['Referência Domazzi', 'Descrição Domazzi', 'EAN Produto', 'Referência Parceiro', 'Descrição Parceiro','Exportador', 'Categoria', 'Última Entrada', 'Estoque', 'Parceiro', 'Preço.Últ.Entrada', 'Qtd.Última.Entrada', 'Preço.Saída', 'Qtd.Última.Saída', 'Sellout.3.meses', 'Sellout.12.meses', 'Ult.Saída']
    Object.keys(products[0]).map(key => key)
  );

  const database = products.map(product => {
    const row = Object.keys(product).map(key => product[key]);
    return row;
  })

  const [data, setData] = useState(database);

  const filters = [
    // {label: 'Produto', inTable: 'Descrição Domazzi'},
    {label: 'Produto', inTable: 'codigo_acesso_principal'},
    {label: 'Exportador', inTable: 'exportador'},
    {label: 'Parceiro', inTable: 'parceiro'},
    {label: 'Categoria', inTable: 'categoria'},
    // {label: 'Ref.Parceiro', inTable: 'Referência Parceiro'},
    {label: 'Ref.Domazzi', inTable: 'referencia_domazzi'},
    {label: 'Desc.Parceiro', inTable: 'descricao_produto'},
  ];
  const [selectedFilters, setSelectedFilters] = useState([]);

  function handleSetShowPerPage(e) {
    e.target.value 
      ? setShowPerPage(e.target.value)
      : setShowPerPage(10)
  }

  function handleFilter() {
    let newData = [...database];

    selectedFilters.forEach((filter, filterIndex) => {
      if(filter.value) {
        const index = header.findIndex(element => element === filter.inTable);

        if(filterIndex === 0) {
          newData = database.filter(row => {
            return row[index].toUpperCase().includes(filter.value.toUpperCase());
          });
        } else {
          newData = newData.filter(row => {
            return row[index].toUpperCase().includes(filter.value.toUpperCase());
          });
        }
      }
    })
    setOffset(0);
    setData(newData);

    setModalOpened(false);
  }

  function handleSearch() {
    if(search) {
      let newData = database.filter(row => {
        return row[2].toUpperCase().includes(search.toUpperCase());
      });

      setData(newData);
    } else {
      setData(database);
    }
  }
  
  useEffect(() => {
    setBody(() => 
      data.slice(offset, offset + Number(showPerPage))
    )
  }, [offset, showPerPage]);

  useEffect(() => {
    setOffset(0);
  }, [showPerPage]);

  useEffect(() => {
    setBody(() => 
      data.slice(offset, offset + Number(showPerPage))
    )
  }, [data]);

  useEffect(() => {
    if(filterType) {
      const label = filterType.charAt(0).toUpperCase() + filterType.slice(1);

      setSelectedFilters([
        {label, value: filter, inTable: filterType}
      ]);

      handleFilter();
    } else {
      setSelectedFilters([]);
    }
  }, [filterType]);

  return (
    <PageContainer title={title}>
      <Modal opened={modalOpened} setOpened={setModalOpened}>
        <ModalContent>
          <header>
            <h2>Filtrar produtos</h2>
          </header>

          <label>Selecione o filtro:</label>
          
          <div>
            {filters.map(filter => (
              <label key={filter.label}>
                <input 
                  type="checkbox" 
                  defaultChecked={selectedFilters.some(element => element.label === filter.label)}
                  value={filter.label}
                  onChange={() => {
                    setSelectedFilters(old => {
                      let newFilters = [...old];
                      const index = newFilters.findIndex(element => element.label === filter.label);
                      index === -1
                        ? newFilters.push({...filter, value: ''})
                        : newFilters.splice(index, 1);
                      return newFilters;
                    })
                  }}
                />

                {filter.label}
                {selectedFilters.some(element => element.label === filter.label) &&
                  <input 
                    type="text" 
                    placeholder="Insira a descrição"
                    defaultValue={selectedFilters.find(element => element.label === filter.label).value}
                    onChange={e => {
                      let newFilters = [...selectedFilters];
                      const index = newFilters.findIndex(element => element.label === filter.label);
                      newFilters[index].value = e.target.value;
                      setSelectedFilters(newFilters);
                    }}
                  />
                }
              </label>
            ))}
          </div>

          <div>
            <ModalButton text="Fechar" color="red" onClick={() => setModalOpened(false)}/>
            <ModalButton text="Aplicar Filtro" color="branding" onClick={handleFilter}/>
          </div>
        </ModalContent>
      </Modal>

      <FilterArea>
        <div>
          <FilterButton color="branding" onClick={() => setModalOpened(true)}>
            <img src={FilterIcon} alt="" />
            Filtrar por:        
          </FilterButton> 

          <FilterButton color="branding">
            <img src={ExcelIcon} alt="" />
            Exportar Excel     
          </FilterButton> 
        </div>

        <div>
          <label>Pesquisar: 
            <InputWithIcon 
              placeholder="Busque por um título"
              right={{src: SearchIcon, onClick: () => handleSearch()}}
              value={search}
              onEnter={handleSearch}
              setValue={setSearch}
            />
          </label>
        </div>
      </FilterArea>

      <ShowPerPageArea>
        <label>Mostrar</label>

        <input type="number" value={showPerPage} onChange={handleSetShowPerPage}  inputMode="numeric" pattern="\d*" min={0}/>
        <label>Produtos por página</label>
      </ShowPerPageArea>

      <Table header={header} body={body}/>

      <Pagination limit={showPerPage} total={data.length} offset={offset} setOffset={setOffset} showPerPage={showPerPage}/>
    </PageContainer>
  )
}