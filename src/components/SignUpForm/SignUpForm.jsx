import React, { useState } from 'react';
import { signUp } from '../../utilities/users-service';
import './SignUpForm.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function SignUpForm(props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
  });

  const [error, setError] = useState('');
  
  // Use useNavigate to get the navigation function
  const navigate = useNavigate();

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
    setError('');
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const user = await signUp(formData);
      props.setUser(user);
      navigate('/');
    } catch {
      setError('Sign Up Failed - Try Again');
    }
  };

  const disable = formData.password !== formData.confirm;

  return (
    <div>
      <div className="form-container-signup">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label>Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label>Confirm</label>
          <input
            className="form-control"
            type="password"
            name="confirm"
            value={formData.confirm}
            onChange={handleChange}
            required
          />
          <button
            className="btn btn-outline-success"
            type="submit"
            disabled={disable}
          >
            SIGN UP
          </button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}

export default SignUpForm;
