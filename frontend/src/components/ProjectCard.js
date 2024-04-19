import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = (data) => {
  console.log(data)
  return (
    <Link to={'/description/'+data?.info?.projectID} className='border-[1px] relative p-4 font-poppins rounded-md w-11/12 h-44 border-blue-700 hover:text-blue-700'>
        <h1 className='font-semibold text-lg capitalize mb-2 text-blue-700'>{data?.info?.projectName}</h1>
        <p className='text-sm text-gray-600 capitalize line-clamp-3'>{data?.info?.projectDesc}</p>
        <p className='text-xs text-slate-500 absolute bottom-0 my-2'>{data?.info?.updatedDate}</p>
  </Link>
  )
}

export default ProjectCard