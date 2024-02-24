import React, { useEffect, useState } from 'react'
import PostComp from '../components/PostComp'


function PastEvents() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/posts').then(response => {
            response.json().then(posts => {
                setPosts(posts);
            });
        });
    }, []);


    return (
        <div className='mt-20 py-20 md:-mt-20 min-h-screen flex justify-center items-center'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4'>
                {posts.length > 0 && posts.map(post => (
                    <PostComp {...post} />

                ))}
            </div>
        </div>
    )
}

export default PastEvents
