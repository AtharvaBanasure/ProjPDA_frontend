// src/components/TeacherDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TeacherDashboard = () => {
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        // Fetch sessions from the backend
        axios.get('/api/sessions')
            .then(response => setSessions(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Teacher Dashboard</h1>
            <ul>
                {sessions.map(session => (
                    <li key={session._id}>{session.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default TeacherDashboard;
