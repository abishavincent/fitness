import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FitnessContext } from '../context/FitnessContext';

const WelcomeScreen = () => {
  const { fitnessData } = useContext(FitnessContext);
  const totalCaloriesBurned = fitnessData.activities.reduce(
    (acc, activity) => acc + (activity.calories * (activity.duration / 60)), 0 // Assuming calories are per minute
  );

  const caloriesFromSteps = fitnessData.steps * 0.04; // Simple estimation
  const totalCalories = totalCaloriesBurned + caloriesFromSteps;

  return (
    <div>
      <h1>Welcome to ActFour Fitness</h1>
      <p>Steps: {fitnessData.steps}/10,000</p>
      <p>Total Calories Burned: {totalCalories.toFixed(2)}</p>
      <p>Current Weight: {fitnessData.weight}kg</p>
      <p>Goal Weight: {fitnessData.goalWeight}kg</p>

      <h2>Logged Activities</h2>
      <ul>
        {fitnessData.activities.map((activity, index) => (
          <li key={index}>
            <strong>Activity:</strong> {activity.activity}<br />
            <strong>Duration:</strong> {activity.duration} mins<br />
            <strong>Calories Burnt:</strong> {activity.calories}<br />
            <strong>When:</strong> {activity.when}<br />
            <strong>Date:</strong> {activity.date || 'N/A'}
          </li>
        ))}
      </ul>

      <button><Link to="/log-activity">Log Activity</Link></button>
      <button><Link to="/log-steps">Log Steps</Link></button>
      <button><Link to="/my-stats">My Stats</Link></button>
    </div>
  );
};

export default WelcomeScreen; // Ensure this line is present