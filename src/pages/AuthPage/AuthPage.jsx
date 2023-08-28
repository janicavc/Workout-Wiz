import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main className='auth-page'>
      <h1>AuthPage</h1>
      <button class='btn btn-outline-primary' onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Already a user? Log In' : 'Sign Up'}</button>
      <br /><br />
      { showSignUp ?
          <SignUpForm setUser={setUser} />
          :
          <LoginForm setUser={setUser} />
      }
    </main>
  );
}