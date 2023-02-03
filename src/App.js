import './App.css';
import { useState, useEffect} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Form />
    </div>
  );
}

export default App;
