import React from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Wrapper items={['something', 'sombrero', 'wholesome', 'ransom', 'apple', 'react','javascript']}/>
      <Form/>
    </div>
  );
}

export default App;
