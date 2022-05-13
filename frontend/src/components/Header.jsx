import React from 'react'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Header() {
  return (
  <header className='Header'>
<div className='logo'>
<Link to='/'>Blog</Link>
</div>
<ul>
    <li>
        <Link to='/login'>
            <FaSignInAlt /> Login
        </Link>
    </li>
    <li>
        <Link to='/register'>
            <FaSignInAlt /> Register
        </Link>
    </li>
</ul>





  </header>
  )
}

export default Header