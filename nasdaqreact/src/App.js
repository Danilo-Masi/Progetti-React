import React, { useState } from 'react';
//Componenti
import Layout, { Col } from './components/Layout';
import Logo from './components/Logo';
import SearchBar from './components/SearchBar';
import StockList from './components/StockList';
import Stock from './components/Stock';
import EmptyView from './components/EmptyView';
import StockDetail from './components/StockDetail';
import StockDetailList from './components/StockDetailList';
import Chart from './components/Chart';

const stockListMock = [
  { id: 1, nome: 'Apple', simbolo: 'APPL', valore: 142000.14, percentuale: 15.68, checked: false },
  { id: 2, nome: 'Amazon', simbolo: 'AMZ', valore: 34876.22, percentuale: 2.33, checked: false },
  { id: 3, nome: 'Meta', simbolo: 'MT', valore: 786.04, percentuale: 26.01, checked: true },
  { id: 4, nome: 'Netflix', simbolo: 'NFX', valore: 1010.11, percentuale: 3.22, checked: false },
];

export default function App() {

  const [stockList, setStockList] = useState([]);
  const [stocksDetailList, setStocksDetailList] = useState([]);

  //Funzione per ricercare le stock per nome
  const handleSearchStocks = (searchString) => {
    const searchTerm = searchString.toLowerCase();
    const listaFiltrata = stockListMock.filter(stock => {
      const stockName = stock.nome.toLowerCase();
      return stockName.includes(searchTerm);
    });
    setStockList(listaFiltrata);
  }

  //Funzione per salvare una stock
  const handleSaveStock = (id) => {
    const stockSalvata = stockList.find((s) => s.id === id);
    const verifica = stocksDetailList.find((s) => s.id === stockSalvata.id);
    if (verifica) {
      alert('La stock selezionata è già stata salvata')
    } else {
      setStocksDetailList(prevList => [...prevList, stockSalvata]);
      alert(`Stock con id: ${id} salvata`);
    }
  }

  return (
    <Layout >
      {/* Barra di navigazione */}
      <Col width="w-screen" mdWidth="md:w-1/4" height="h-auto" color="bg-gray-200">
        <Logo />
        <SearchBar onSearchStocks={(searchString) => handleSearchStocks(searchString)} />
        {stockList.length === 0 ? (
          <EmptyView height="h-3/4" testo="Fai la tua ricerca" />
        ) : (
          <StockList>
            {stockList.map((s) => (
              <Stock
                onSaveStocks={() => handleSaveStock(s.id)}
                key={s.id}
                nome={s.nome}
                simbolo={s.simbolo} />
            ))}
          </StockList >
        )}
      </Col>
      {/* Main content */}
      <Col width="w-screen" mdWidth="md:w-3/4" height="h-auto">
        {stocksDetailList.length === 0 ? (
          <EmptyView height="h-full" testo="Aggiungi una stock" />
        ) : (
          <StockDetailList >
            {stocksDetailList.map((sd) => (
              <StockDetail
                key={sd.id}
                nome={sd.nome}
                valore={sd.valore}
                percentuale={sd.percentuale}
                checked={sd.checked}
              />
            ))}
          </StockDetailList>    
        )}
      </Col>
    </Layout >
  )
}
