import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate, useParams } from 'react-router-dom'
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



function EditPost() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('')
    const [existingImage, setExistingImage] = useState(null);
    const [tag, setTag] = useState('upcoming');
    const [redirect, setRedirect] = useState(false);
    const { id } = useParams();

    useEffect(() => {

        axios.get(`${process.env.REACT_APP_API_URL}/post/${id}`)
            .then(response => {
                const postInfo = response.data;
                setTitle(postInfo.title);
                setDescription(postInfo.description);
                setContent(postInfo.content);
                setTag(postInfo.tag);
                setExistingImage(postInfo.image); // set existing image
            })
            .catch(error => {
                console.error('Error fetching post details:', error);
            });
    }, []);

    async function updatePost(e) {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', description);
            formData.append('content', content);
            formData.append('image', existingImage); // Use existingImage for edit
            formData.append('tag', tag);

            const response = await axios.put(`${process.env.REACT_APP_API_URL}/post/${id}`, formData);

            if (response.status === 200) {
                setRedirect(true);
            }
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error:', error.message);
        }
    }
    const handleImageChange = (e) => {
        setExistingImage(e.target.files[0]);
    };
    {
        existingImage && (
            <div className="mt-2">
                <p className="text-gray-600 mb-1">Existing Image:</p>
                <img
                    src={`${process.env.REACT_APP_API_URL}/${existingImage}`}
                    alt="Existing"
                    className="rounded-md max-h-40 object-cover"
                />
            </div>
        )
    }


    if (redirect) {
        return <Navigate to={'/post/' + id} />
    }
    return (
        <div className=' mt-24 '>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add New Session</h2>
                <form onSubmit={updatePost}>
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
                        style={{ height: '500px' }}
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
                        className="bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-500 focus:outline-none focus:shadow-outline-blue"
                    >
                        Edit Post
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EditPost
