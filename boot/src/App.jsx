import './App.css';
import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Content from './componentes/content';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Content />
      </BrowserRouter>
    </div>
)

}

export default App
