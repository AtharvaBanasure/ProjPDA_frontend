import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


const SessionForm = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null); // Use state to store the selected image file
    const [tag, setTag] = useState('upcoming');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', description);
            formData.append('image', image);
            formData.append('tag', tag);

            const response = await axios.post(`${process.env.REACT_APP_API_URL}/createSession`, formData);
            console.log('Response:', response.data);
            navigate('/admin');
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]); // Set the selected image file
    };

    return (
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
                    Description:
                    <textarea
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows="4"
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
                    Add Session
                </button>
            </form>
        </div>
    );
};

export default SessionForm;
