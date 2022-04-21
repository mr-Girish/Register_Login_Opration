import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='Navbar'>
    <ul>
      <li> <Link to="/">Home</Link> </li>
     
      <li><Link to="/component/register">Register</Link></li>
      <li><Link to="/component/login">Login</Link></li>
      <li><Link to="/component/displyUser">Show Users</Link></li> 
    </ul>
  </div>
  );
};

export default Navbar;
