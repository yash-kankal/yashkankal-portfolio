import React from 'react'

import '../Navbar/Navbar.css'



export default function Navbar() {
  

  return (
    <div class= "Navbar">

        <div class= "logo">
            <div class="logo-left">&lt;</div>
            Yash<span class="logo-middle">/</span>Kankal
            <div class="logo-right">&gt;</div>
        </div>
            
        <ul className="menu-items">

            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>

        <div className="menu-connect">
            Connect With Me!
        </div>


    </div>
  )
}
