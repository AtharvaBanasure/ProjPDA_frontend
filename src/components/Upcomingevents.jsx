import React, { useEffect, useState } from 'react';
import PostComp from './PostComp';

function UpcomingEvents() {
    const [upcomingPosts, setUpcomingPosts] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/upcoming-posts`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((posts) => {
                setUpcomingPosts(posts);
            })
            .catch((error) => {
                console.error('Error fetching upcoming posts:', error);
            });
    }, []);


    return (
        <div className='mt-16 py-20 md:mt-12 min-h-screen flex flex-col items-center'>
            <h1 className='text-3xl font-bold mb-6'>Upcoming Events</h1>
            <hr className='border-t border-gray-300 w-16 mb-8' />

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4'>
                {upcomingPosts.length > 0 &&
                    upcomingPosts.map((post) => <PostComp key={post._id} {...post} />)}
            </div>
        </div>
    );
}

export default UpcomingEvents;
