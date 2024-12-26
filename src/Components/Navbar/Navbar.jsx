import React from 'react'
import './Navbar.css'
  

 
 
// import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <div className=' style={bg-dark}  Navbar ' >
      <img src='https://img.icons8.com/?size=100&id=IOqNKauMiZ6W&format=png&color=000000' alt="" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>

      </ul>
      <div className="nav-connect">Connect with me</div>
    </div>
  )
}

export default Navbar
