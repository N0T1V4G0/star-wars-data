import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
import Header from './components/Header';
import Filters from './components/Filters';

function App() {
  return (
    <PlanetsProvider>
      <Header />
      <Filters />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
