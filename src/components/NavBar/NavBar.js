import React from 'react';
import './NavBar.css'
import Dropdown from 'react-bootstrap/Dropdown';

function NavBar() {
  return (
    <div className='nav'>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
    <div className='btn-position'>
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
        English
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">English</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Italian</Dropdown.Item>
      </Dropdown.Menu>
      </Dropdown>
      <button className='signIn-btn'>Sign In</button>
    </div>
    </div>
  )
}
export default NavBar
