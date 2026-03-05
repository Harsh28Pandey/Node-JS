import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        axios.post("http://localhost:3000/create-post", formData)
            .then(() => {
                // console.log(res)
                navigate("/feed")
                alert("Post created successfully")
            })
            .catch((err) => {
                console.log(err)
                alert("Error creating post")
            })
    }

    return (
        <section className='create-post-section'>
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <input type="file" name='image' accept='image/*' />
                <br /><br />
                <input type="text" name='caption' required placeholder='Enter caption' />
                <br /><br />
                <button type='submit'>Submit</button>
            </form>
        </section>
    )
}

export default CreatePost