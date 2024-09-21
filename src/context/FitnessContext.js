import React, { createContext, useState, useEffect } from 'react';
import metValues from './metValues.json'; // Adjust the path as needed

export const FitnessContext = createContext();

export const FitnessProvider = ({ children }) => {
  const [fitnessData, setFitnessData] = useState({
    weight: 70,
    height: 177.8,
    goalWeight: 65,
    steps: 0,
    activities: [],
    metValues: metValues || [],
  });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('fitnessData')) || fitnessData;
    setFitnessData(storedData);
  }, []);

  useEffect(() => {
    localStorage.setItem('fitnessData', JSON.stringify(fitnessData));
  }, [fitnessData]);

  const logActivity = (activity) => {
    setFitnessData((prevState) => ({
      ...prevState,
      activities: [...prevState.activities, activity],
    }));
  };

  const logSteps = (newSteps) => {
    setFitnessData((prevState) => ({
      ...prevState,
      steps: prevState.steps + newSteps,
    }));
  };

  const updateStats = (weight, goalWeight) => {
    setFitnessData((prevState) => ({
      ...prevState,
      weight,
      goalWeight,
    }));
  };

  const getMETValue = (activity) => {
    const metValueEntry = fitnessData.metValues.find((item) => item.activity === activity);
    return metValueEntry ? metValueEntry.met : null;
  };

  return (
    <FitnessContext.Provider value={{ fitnessData, logActivity, logSteps, updateStats, getMETValue }}>
      {children}
    </FitnessContext.Provider>
  );
};
