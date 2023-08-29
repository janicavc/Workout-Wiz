import React, { useState } from 'react';
import './ProgressForm.css';

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
      <form onSubmit={handleSubmit} className='progress-form'>
        <label>
          Date:
          <input
            type="date"
            name="date"
            class="form-control"
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
            class="form-control"
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
            class="form-control"
            value={formData.weight}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            class="form-control"
            value={formData.description}
            onChange={handleInputChange}
            cols="30"
            rows="10"
            required
          />
        </label>
        <button className='btn btn-success' type="submit">Submit</button>
      </form>
    </div>
  );
}
