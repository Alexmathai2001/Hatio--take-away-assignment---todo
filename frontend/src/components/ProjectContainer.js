import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectContainer = () => {
  return (
    <div className='py-10 px-4 w-full flex gap-2'>
        <ProjectCard />
        <ProjectCard />
    </div>
  )
}

export default ProjectContainer