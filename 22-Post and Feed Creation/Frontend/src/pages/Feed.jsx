import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Feed = () => {

    const [posts, setPosts] = useState([
        {
            _id: 1,
            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuZGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
            caption: 'Beautiful view of mountains'
        }
    ])

    useEffect(() => {
        axios.get("http://localhost:3000/posts")
            .then((response) => {
                setPosts(response.data.posts)
                // console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <section className='feed-section'>
            {
                posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post._id} className='post-card'>
                            <img src={post.image} alt={post.caption} />
                            <p>{post.caption}</p>
                        </div>
                    ))
                ) : (
                    <h1>No posts found</h1>
                )
            }
        </section>
    )
}

export default Feed