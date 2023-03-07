import React from 'react';
import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to='/Judy-Bui-Resume.pdf' />}/>
      </Routes>
    </div>
  );
}

export default App;
