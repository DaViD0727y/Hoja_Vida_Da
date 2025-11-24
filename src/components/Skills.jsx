import React from 'react'

const Skills = ({ name, level }) => (
  <div className="skill-card">
    <div className="skill-name">{name}</div>
    {level && <div className="skill-level">{level}</div>}
  </div>
)

export default Skills
