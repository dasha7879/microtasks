import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { link } from 'fs';
// import { NewComponent } from './NewComponent';
import { isPropertySignature } from 'typescript';
import { Button } from './Button';
import { NewComponent } from './NewComponent';


type FilterType = 'all' | 'Dollars' | 'RUBLS'

function App() {

  const [money, setMoney] = useState([
    { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
    { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
    { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
  ])



  //локальный стейт, который записывает значение кнопки
  const [filter, setFilter] = useState<FilterType>('all')




  const onClickFilterHandler = (nameButton: FilterType) => {
    setFilter(nameButton);
  }





  return (
    <>
      <Button name='all' callBack={() => (onClickFilterHandler('all'))} />
      <Button name='RUBLS' callBack={() => (onClickFilterHandler('RUBLS'))} />
      <Button name='Dollars' callBack={() => (onClickFilterHandler('Dollars'))} />
      <NewComponent money={money} filter={filter} />
    </>

  )
}

export default App;
