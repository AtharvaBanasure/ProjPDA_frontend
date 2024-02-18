// src/components/SessionList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SessionList = () => {
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        // Fetch sessions from the backend
        axios.get('/api/sessions')
            .then(response => setSessions(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h2>Sessions</h2>
            <ul>
                {sessions.map(session => (
                    <li key={session._id}>{session.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default SessionList;
