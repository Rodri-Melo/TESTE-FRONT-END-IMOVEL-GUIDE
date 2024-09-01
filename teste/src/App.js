import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './styles/global.css';

const App = () => {
  return (
    <div id="root"> 
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
