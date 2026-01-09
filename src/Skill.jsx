import React from 'react'

const Skill = (skill) => {
  return (
    <div className='skills-container'>
      <div class="skill">
          <img class={skill.imgClass} src={skill.imgSource} alt={skill.imgAlt} />
          <div class="skill-detail">
            <h4 class="skill-unit">{skill.unit}</h4>
            <p>
             {skill.detail}
            </p>
          </div>
        </div>
    </div>
  )
}

export default Skill