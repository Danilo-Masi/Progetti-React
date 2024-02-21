import React from 'react';
//Componenti
import Layout, { LeftCol, RigthCol } from './components/Layout';
import Logo from './components/Logo';
import SearchBar from './components/SearchBar';
import ListaStock from './components/ListaStock';

export default function App() {
  return (
    <Layout>
      <LeftCol>
        <Logo />
        <SearchBar />
        <ListaStock />
      </LeftCol>
      <RigthCol>
        
      </RigthCol>
    </Layout>
  )
}
