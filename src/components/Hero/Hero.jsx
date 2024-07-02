import React, { useEffect, useRef } from 'react';
import "./Hero.css";
import logo from '../../assets/bg.png';
import Typed from 'typed.js';

export  default function Hero() {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        "Full Stack Developer",
      ],
      typeSpeed: 150,
      backSpeed: 100,
      loop: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="Hero">
      <img src={logo} alt="" width={350}/>
      <h1>Hi, I am <span className='name'>Yash Kankal</span></h1>
      <h1>I am a <span ref={typedElement} class = "typed-text"></span></h1>
      <p></p>

      <div className="heroaction">
        <div className='hero-resume'>Download Resume</div>
      </div>
      
    </div>
  );
}


