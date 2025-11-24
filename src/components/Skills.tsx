import React from 'react'

type Props = { name: string; level?: string }

const Skills: React.FC<Props> = ({ name, level }) => (
  <div className="skill-card">
    <div className="skill-name">{name}</div>
    {level && <div className="skill-level">{level}</div>}
  </div>
)

export default Skills
