import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectContainer = () => {
  return (
    <div className='py-10 px-4 grid grid-cols-2 gap-2'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
    </div>
  )
}

export default ProjectContainer