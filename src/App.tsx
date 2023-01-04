import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import { Body } from './Body';
import { Footer } from './Footer';

function App() {
  return (
    <>
      <Header title='New header' />
      <Body titleForBody='New  Body' />
      <Footer titleForFooter='New Footer' />
      </>
      );
}

      export default App;
