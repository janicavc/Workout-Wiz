import React, { useState } from 'react'

export default function ProgressPage() {
  const [formData, setFormData] = useState({
    date: '',
    exercise: '',
    weight: '',
    description: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', formData);
    setFormData({
      date: '',
      exercise: '',
      weight: '',
      description: '',
    });
  };

  return (
    <>
    <h1>Personal Progress</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type='date'
            name='date'
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="exercise">Exercise:</label>
          <input
            type='text'
            name='exercise'
            value={formData.exercise}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="weight">Weight:</label>
          <input
            type='number'
            name='weight'
            value={formData.weight}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            cols="30"
            rows="10"
            required
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}
