import './App.css';
import React from 'react';
import Header from './components/Header';
import MainBody from './components/MainBody';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <MainBody />
      <Footer />
    </div>
  );
}

export default App;
