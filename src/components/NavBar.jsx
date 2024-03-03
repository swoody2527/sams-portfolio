import React from 'react'
import '../styles/NavBar.css'

function NavBar() {
  return (
    <nav className='navbar'>
        <a href='/' className='site-title'>Sam Woodall</a>
        <ul>
            <li>
                <a href='/about-me'>About Me</a>
            </li>
            <li>
                <a href='/'>Skillset</a>
            </li>
            <li>
                <a href='/'>Projects</a>
            </li>
            <li>
                <a href='/'>Contact Me</a>
            </li>
            <li>
                <a href='/'>GitHub</a>
            </li>
            <li>
                <a href='/'><img src=''></img></a>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar