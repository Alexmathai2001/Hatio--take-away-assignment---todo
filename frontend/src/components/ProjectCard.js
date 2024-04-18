import React from 'react'

const ProjectCard = () => {
  return (
    <div className='border-[1px] relative p-4 font-poppins rounded-md w-3/6 h-44 border-blue-700 hover:text-blue-700'>
        <h1 className='font-semibold text-lg capitalize mb-2 text-blue-700'>Project Name</h1>
        <p className='text-sm text-gray-600 capitalize line-clamp-3'>small sdffdescriiptio on the project never matters lorem ipusm is a a general used</p>
        <p className='text-xs text-slate-500 absolute bottom-0 my-2'>Created on 07/03/2024</p>
  </div>
  )
}

export default ProjectCard