import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'
import { Link } from 'react-router-dom'
import './card.css'
function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <Link to='/login'>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="mt-8 inline-flex items-center justify-center  py-3 px-6 font-dm text-base font-medium bg-white bg-opacity-25 text-blue-400 shadow-xl shadow-blue-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                    </Link>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8 card'>
            <Container>
                <div className='flex  flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-64'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home