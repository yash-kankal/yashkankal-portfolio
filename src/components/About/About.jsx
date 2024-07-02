import React from 'react'

import '../About/About.css'
import theme_pattern from "../../assets/theme_pattern.svg"
import abg from "../../assets/aboutbg.jpg"





export default function About() {


  return (
    <div class ='About'>

        <div className="abouttitle">

            <h1> About Me</h1>

            <img src={theme_pattern} alt="" />

        </div>

        <div className="about-section">

        <div className="about-left">

                <img src={abg} alt="" />
        </div>

        <div className="about-right">

            <div className="about-para">
                <p>
                I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
                </p>

                <p>  Proficient in crafting responsive user interfaces and robust server-side applications. Committed to writing clean, maintainable code and staying current with emerging web technologies. Experienced in agile development methodologies and collaborative environments. Passionate about solving complex problems and delivering high-quality, scalable solutions that drive business growth and enhance user experience.</p>
            </div>

            <div className="about-skills">
                <div className="aboutskill"><p>HTML & CSS</p><hr style ={{width:"50%"}}></hr> </div>
                <div className="aboutskill"><p>React JS</p><hr style ={{width:"50%"}}></hr> </div>
                <div className="aboutskill"><p>JavaScript</p><hr style ={{width:"50%"}}></hr> </div>
                <div className="aboutskill"><p>Express JS</p><hr style ={{width:"50%"}}></hr> </div>
            </div>

        </div>


        </div>
   
    </div>
  )
}

