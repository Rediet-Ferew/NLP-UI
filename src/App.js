// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import ThreatPrediction from './components/ThreatPrediction';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router> {/* Wrap your entire application with BrowserRouter */}
      <div className='flex'>
        <Sidebar />
        <div className='p-4'>
        <h1>Threat Detection </h1>
        <ThreatPrediction />
        </div>
        
      </div>
    </Router>
  );
}

export default App;
