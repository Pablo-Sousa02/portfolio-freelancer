import React from 'react';
import GlobalStyle from './styles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
    </>
  );
};

export default App;
