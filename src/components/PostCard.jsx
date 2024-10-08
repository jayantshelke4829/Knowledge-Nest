import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-green-300 rounded-xl  h-max align-middle  p-4'>
            <div className='w-full flex justify-center  mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl h-80 object-cover '  />

            </div>
            <h2
            className='text-xl font-bold flex justify-center'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard