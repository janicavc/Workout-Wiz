import React, { useState } from 'react';

export default function ProgressForm({ onSubmit }) {
  const initialFormData = {
    date: '',
    exercise: '',
    weight: '',
    description: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  function handleInputChange(evt) {
    const newFormData = { ...formData, [evt.target.name]: evt.target.value };
    setFormData(newFormData);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    console.log('Form Data:', formData);
    onSubmit(formData);
    setFormData(initialFormData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Exercise:
          <input
            type="text"
            name="exercise"
            value={formData.exercise}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Weight:
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            cols="30"
            rows="10"
            required
          />
        </label>
        <button className='btn btn-primary' type="submit">Submit</button>
      </form>
    </div>
  );
}
