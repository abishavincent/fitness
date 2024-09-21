import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Update the import
import { FitnessContext } from '../context/FitnessContext'; // Adjust the path as necessary

const MyStats = () => {
  const { fitnessData, updateStats } = useContext(FitnessContext);
  const navigate = useNavigate(); // Replace history with navigate
  const [weight, setWeight] = useState(fitnessData.weight);
  const [goalWeight, setGoalWeight] = useState(fitnessData.goalWeight);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateStats(weight, goalWeight);
    navigate('/'); // Use navigate instead of history.push
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>My Stats</h2>
      <label>Weight (kg)</label>
      <input type="number" value={weight} onChange={(e) => setWeight(parseFloat(e.target.value))} />
      
      <label>Goal Weight (kg)</label>
      <input type="number" value={goalWeight} onChange={(e) => setGoalWeight(parseFloat(e.target.value))} />
      
      <button type="submit">Save Stats</button>
    </form>
  );
};

export default MyStats;
