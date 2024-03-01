import React from 'react'
import '../styles/NavBar.css'

function NavBar() {
  return (
    <nav className='navbar'>
        <a href='/' className='site-title'>Sam Woodall</a>
        <ul>
            <li>
                <a href='/'>About Me</a>
            </li>
            <li>
                <a href='/'>Projects</a>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar