import React from 'react'
import "./Skills.css"
import { skills } from '../../data'
import SkillCard from '../../ui/SkillCard'
const Skills = () => {
  return (
    <div id='skills'>
      <div className="section__wrapper">
        <div className="section__header">
          <h2 className="shine">My skills</h2>
        </div>
        <div className="skill__container">
          {skills.map((list,index)=>(
            <SkillCard {...list} key={index}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills