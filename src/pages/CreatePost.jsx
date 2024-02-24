import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const modules = {
    toolbar: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'align': [] }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['link', 'image'],
        ['clean']
    ],
    clipboard: {
        matchVisual: false
    }
};

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'color', 'background',
    'align',
    'list', 'bullet',
    'link', 'image'
];


const CreatePost = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('')
    const [image, setImage] = useState(null); // Use state to store the selected image file
    const [tag, setTag] = useState('upcoming');
    const [redirect, setRedirect] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', description);
            formData.append('content', content); // Add content to the form data
            formData.append('image', image);
            formData.append('tag', tag);

            const response = await axios.post('http://localhost:3001/createPost', formData);

            if (response.status === 200) {
                setRedirect(true);
            }
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]); // Set the selected image file
    };

    if (redirect) {
        return <Navigate to={'/events'} />
    }

    return (
        <div className=' mt-24 '>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add New Session</h2>
                <form onSubmit={handleSubmit}>
                    <label className="block text-sm text-gray-600 mb-2">
                        Session Title:
                        <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </label>
                    <label className="block text-sm text-gray-600 mb-2">
                        Summary:
                        <textarea
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        ></textarea>
                    </label>
                    <label className="block text-sm text-gray-600 mb-2">
                        Image Upload:
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </label>

                    <label className="block text-sm text-gray-600 mb-2">
                        Text Area:
                    </label>
                    <ReactQuill
                        theme="snow"
                        value={content}
                        onChange={(e) => setContent(e)}
                        style={{ height: '250px' }}
                        modules={modules}
                        formats={formats}
                    />

                    <label className="block text-sm text-gray-600 mb-2 mt-16">
                        Tag (Upcoming/Past):
                        <select
                            name="tag"
                            value={tag}
                            onChange={(e) => setTag(e.target.value)}
                            className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        >
                            <option value="upcoming">Upcoming</option>
                            <option value="past">Past</option>
                        </select>
                    </label>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                    >
                        Add Post
                    </button>
                </form>
            </div>
        </div>
    );

};

export default CreatePost;
