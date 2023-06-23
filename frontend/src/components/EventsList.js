import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ButtonJoin from './ButtonJoin';

// ...

function EventsList() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:4000/events', {
                headers: {
                    Authorization: `${token}`,
                },
            });
            setEvents(response.data.events);
        } catch (error) {
            console.error('Erreur lors de la récupération des événements :', error);
        }
    };

    return (
        <div>
            <h2>Liste des événements</h2>
            {events.map((event) => (
                <div key={event.id}>
                    <h3>Nom : {event.event_name}</h3>
                    <p>Description :{event.description}</p>
                    <p>Localisation : {event.location}</p>
                    <p>{event.event_time}</p>
                    <ButtonJoin eventId={event.id} />
                </div>
            ))}
        </div>
    );
}

export default EventsList;

