import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button';


function App() {

  const Button1Foo = (subscriber: string, age:number) => {
    console.log(subscriber,age)
  }
  const Button2Foo = (subscriber: string) => {
    console.log(subscriber)
  }
  const Button3Foo = () => {
    console.log('Im stupid button')
  }


  return (
    <div className='App'>
      <Button name={'MyYoutubeChanal-1'} callBack={(()=>Button1Foo('Im VAsya',21))} />
      <Button name={'MyYoutubeChanal-2'} callBack={(()=>Button2Foo('Im Ivan' ))} />
      <Button name={'Stupid'} callBack={Button3Foo}/>
    </div>
  )
}

export default App;
