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
import Skeleton from './components/Skeleton';
//Services
import { getStockSearch } from './services/StockAPI';

export default function App() {

  const [stockList, setStockList] = useState([]);
  const [stocksDetailList, setStocksDetailList] = useState([]);
  const [loading, setLoading] = useState(false);

  //Funzione per ricercare la stock in base ad all'input inserito dall'utente
  const handleSearchStocks = async (searchString) => {
    try {
      setLoading(true);
      const data = await getStockSearch({ searchString });
      setStockList(data || []);
    } catch (error) {
      console.error("Errore nella ricerca delle stock");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  //Funzione per salvare una stock nella lista "stockDetailList"
  const handleSaveStock = (id) => {
    const stockSalvata = stockList.find((s) => s.uuid === id);
    const verifica = stocksDetailList.find((s) => s.uuid === stockSalvata.uuid);
    if (verifica) {
      alert('La stock selezionata è già stata salvata')
    } else {
      setStocksDetailList(prevList => [...prevList, stockSalvata]);
      alert(`Stock con id: ${id} salvata`);
    }
  }

  //Funzione per rimuovere una stock dalla lista "stockDetailList"
  const handleUnsaveStock = (uuid) => {
    setStocksDetailList(prevList => prevList.filter(stock => stock.uuid !== uuid));
  }

  return (
    <Layout >
      {/* Barra di navigazione */}
      <Col width="w-screen" mdWidth="md:w-1/4" height="h-auto" color="bg-gray-200">
        <Logo />
        <SearchBar onSearchStocks={(searchString) => handleSearchStocks(searchString)} />
        {loading ? (
          <Skeleton />
        ) : stockList.length === 0 ? (
          <EmptyView height="h-3/4" testo="Fai la tua ricerca" />
        ) : (
          <StockList>
            {stockList.map((s) => (
              <Stock
                onSaveStocks={() => handleSaveStock(s.uuid)}
                key={s.uuid}
                nome={s.symbol}
                simbolo={s.symbol}
                valore={s.price}
                immagine={s.iconUrl}
                percentuale={s.percentuale} />
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
                onUnsaveStok={() => handleUnsaveStock(sd.uuid)}
                key={sd.uuid}
                uuid={sd.uuid}
                nome={sd.symbol}
                simbolo={sd.symbol}
                valore={sd.price}
                immagine={sd.iconUrl}
                percentuale={sd.percentuale} />
            ))}
          </StockDetailList>
        )}
      </Col>
    </Layout >
  )
}
