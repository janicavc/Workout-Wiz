import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav class='navbar navbar-expand-sm bg-danger-subtle justify-content-center' className='navbar'>
      <Link className='link' to="/">Home Page</Link>
      &nbsp; | &nbsp;
      <Link className='link' to="/categories">Exercise Categories</Link>
      &nbsp; | &nbsp;
      {user ? (
        <>
          <Link className='link' to="/progress">Progress Page</Link>
          &nbsp; | &nbsp;
          <span className='navbar-name'>Welcome, {user.name}</span>
          &nbsp;&nbsp;<Link className='link-logout' to="" onClick={handleLogOut}>Log Out</Link>
        </>
      ) : (
        <Link className='link' to="/auth">Log In</Link>
      )}
    </nav>
  );
}

