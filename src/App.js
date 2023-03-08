import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import CustomHeader from './components/header';
import Homepage from './components/homepage';
import CustomFooter from './components/footer';

function App() {

  return (
    <div className="App">
      <CustomHeader />
      <Routes>
        <Route exact path="/" element={<Homepage/>} />
      </Routes>
      <CustomFooter />
    </div>
  );
}

export default App;
