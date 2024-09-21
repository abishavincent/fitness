import React, { useState, useContext } from 'react';
import { FitnessContext } from '../context/FitnessContext';

const LogActivity = () => {
  const { logActivity } = useContext(FitnessContext);
  const [activity, setActivity] = useState('');
  const [duration, setDuration] = useState('');
  const [calories, setCalories] = useState('');
  const [when, setWhen] = useState('today');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const activityData = {
      activity,
      duration,
      calories,
      when,
      date,
    };
    logActivity(activityData);
    // Clear the form fields
    setActivity('');
    setDuration('');
    setCalories('');
    setWhen('today');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Activity</label>
      <input
        type="text"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
        required
      />

      <label>Duration (in minutes)</label>
      <input
        type="number"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        required
      />

      <label>Calories Burnt</label>
      <input
        type="number"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        required
      />

      <label>When</label>
      <select
        value={when}
        onChange={(e) => setWhen(e.target.value)}
        required
      >
        <option value="today">Today</option>
        <option value="yesterday">Yesterday</option>
        <option value="this_week">This Week</option>
        <option value="last_week">Last Week</option>
        <option value="custom">Custom Date</option>
      </select>

      <label>Date</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default LogActivity;
