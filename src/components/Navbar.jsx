import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
        <Link to='/blog'>blog</Link>
        <Link to='/events'>Create Events</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
        <Link to='/merch'>Merch</Link>
        <Link to='/ticket'>Buy Ticket</Link>
    </nav>
  )
}

export default Navbar