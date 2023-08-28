import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main className='auth-page'>
      { showSignUp ?
      <div>
        <h1>Join The Club!</h1>
        <br /><br />
        <SignUpForm setUser={setUser} />
      </div>
          :
          <div>
        <h1>Welcome Back!</h1>
        <br /><br />
        <LoginForm setUser={setUser} />
      </div>
      }
      <button class='btn btn-outline-primary' onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Already a user? Log In' : 'Sign Up'}</button>
    </main>
  );
}