import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Update the import
import { FitnessContext } from '../context/FitnessContext';

const LogSteps = () => {
  const { logSteps } = useContext(FitnessContext);
  const navigate = useNavigate(); // Replace history with navigate
  const [steps, setSteps] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    logSteps(steps);
    navigate('/'); // Use navigate instead of history.push
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Log Steps</h2>
      <label>Steps Count</label>
      <input 
        type="number" 
        value={steps} 
        onChange={(e) => setSteps(parseInt(e.target.value, 10))} 
      />
      <button type="submit">Save Steps</button>
    </form>
  );
};

export default LogSteps;
