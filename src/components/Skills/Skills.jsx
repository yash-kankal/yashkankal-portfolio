import React from 'react'

import '../Skills/Skills.css'

import theme_pattern from "../../assets/theme_pattern.svg"

import skill_data from "../../assets/skills_data.js"
import arrow_icon from "../../assets/arrow_icon.svg"



export default function Skills() {


  return (
    <div className='Skills'>
        <div className="skillstitle">
           <h1>My Skills</h1> 
           <img src={theme_pattern} alt="" />
        </div>

        <div className="skill-container">
            {skill_data.map((skill,index)=> {

                return <div key = {index }className='skill-format'>
                    <h3>{skill.s_no}</h3>
                    <h2>{skill.s_name}</h2>
                    <p>{skill.s_desc}</p>
                    <div className='readmore'>

                        <p>Read More</p>
                        <img src={arrow_icon} alt="" />
                        </div>


                    </div>
            } )}
        </div>
    </div>
  )
}

