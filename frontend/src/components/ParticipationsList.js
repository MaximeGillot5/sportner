import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ButtonJoin from './ButtonJoin';

function ParticipationsList({ eventId }) {
    const [events, setEvents] = useState([]);
    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        fetchEvents(eventId);
    }, [eventId]);

    const fetchEvents = async (eventId) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:4000/events/${eventId}`, {
                headers: {
                    Authorization: `${token}`,
                },
            });
            setEvents(response.data.event);
            if (Array.isArray(response.data.participants)) {
                setParticipants(response.data.participants);
            }
            console.log(response.data);
        } catch (error) {
            console.error('Erreur lors de la récupération des événements :', error);
        }
    };

    return (
        <div>
            <div>
                <h3>Participants</h3>
                {Array.isArray(participants) &&
                    participants.map((participation) => (
                        <div key={participation.id}>
                            <p>participants : {participation.first_name}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default ParticipationsList;
