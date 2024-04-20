import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectContainer = (data) => {  
  return (
    <div className='py-10 px-6 grid grid-cols-2 md:grid-cols-6 gap-4'>
      {data.data.map((data,index) => {
        return (
        <ProjectCard info={data} key={index} />
        )
      })}
    </div>
  )
}

export default ProjectContainer