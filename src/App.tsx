import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Products from './component/products';
import Footer from './component/footer';
import Silde from './component/slide';

function App() {
  const title = [
    'Home',
    'About',
    'Shop',
    'Contact'
  ]
  return (
    <>
      <Header titles = {title}/>
      <Silde/>
      <Products/>
      <Footer/>
    </>
  );
}

export default App;
