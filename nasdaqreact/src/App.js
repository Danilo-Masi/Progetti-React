import React, { useState } from 'react';
//Componenti
import Layout, { Col } from './components/Layout';
import Logo from './components/Logo';
import SearchBar from './components/SearchBar';
import StockList from './components/StockList';
import Stock from './components/Stock';
import EmptyView from './components/EmptyView';

const stockMock = [
  { id: 1, nome: 'Apple', simbolo: 'APPL' },
  { id: 2, nome: 'Amazon', simbolo: 'AMZ' },
  { id: 3, nome: 'Meta', simbolo: 'MT' },
];

//Funzione per renderizzare i componenti Stock
function renderStocks() {
  return (
    stockMock.map((s) => {
      return (
        <Stock
          key={s.id}
          nome={s.nome}
          simbolo={s.simbolo}
          id={s.id} />
      )
    })
  );
}

export default function App() {

  const [stockDetailList, setStockDetailList] = useState([]);

  return (
    <Layout >
      {/* Barra di navigazione */}
      <Col width="w-screen" mdWidth="md:w-1/4" height="h-auto" color="bg-gray-200">
        <Logo />
        <SearchBar />
        {stockMock.length === 0 ? (
          <EmptyView height="h-3/4" />
        ) : (
          <StockList altezza="h-3/4">
            {renderStocks()}
          </StockList >
        )}
      </Col>
      {/* Main content */}
      <Col width="w-screen" mdWidth="md:w-3/4" height="h-auto">
        {stockDetailList.length === 0 ? (
          <EmptyView height="h-full" />
        ) : (
          <StockList altezza="h-full">
            ciao
          </StockList>
        )}
      </Col>
    </Layout >
  )
}
