import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomeScreen from './components/WelcomeScreen';
import LogActivity from './components/LogActivity';
import LogSteps from './components/LogSteps';
import MyStats from './components/MyStats';
import { FitnessProvider } from './context/FitnessContext';
import './App.css';

function App() {
  return (
    <FitnessProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<WelcomeScreen />} />
            <Route path="/log-activity" element={<LogActivity />} />
            <Route path="/log-steps" element={<LogSteps />} />
            <Route path="/my-stats" element={<MyStats />} />
          </Routes>
        </div>
      </Router>
    </FitnessProvider>
  );
}

export default App;
