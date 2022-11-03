import React from 'react'
import skills from "../data/Skills"

const Skills = () => {

  const style = {
    gridContainer: `grid grid-cols-2 sm:grid-cols-4 mt-8 sm:mt-20 lg:mt-24 gap-8 lg:gap-16`,
    boxContainer: `outline-teal aspect-square py-4 sm:py-6 lg:p-8 hover:bg-teal-800`,
  }

  return (
    <div>
      <h2 className='relative'>Skills <span className='watermark'>Skills</span></h2>
      <div className={style.gridContainer}>
        {skills.map(skill => {
          return (
            <div key={skill.id} className={style.boxContainer}>
              <div className='flex-col-center'>
                <i className={`bx bxl-${skill.skill} text-6xl lg:text-8xl`}></i>
                <small>{skill.skill}</small>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills