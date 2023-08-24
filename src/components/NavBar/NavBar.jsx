import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/home">Home Page</Link>
      &nbsp; | &nbsp;
      <Link to="/categories">Exercise Categories</Link>
      &nbsp; | &nbsp;
      {user ? (
        <>
          <Link to="/progress">Progress Page</Link>
          &nbsp; | &nbsp;
          <span>Welcome, {user.name}</span>
          &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
        </>
      ) : (
        <Link to="">Log In</Link>
      )}
    </nav>
  );
}

