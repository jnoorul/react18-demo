import React from 'react';
import { Header } from './components/header/Header';
import { NavBar } from './components/navbar/NavBar';

function App() {
  return (
    <div className='h-full'>
      <Header />
      <div className='flex flex-row h-full'>
        <NavBar />
      </div>
    </div>
  );
}

export default App;
