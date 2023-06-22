import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EventsList() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const token = localStorage.getItem('token'); // Récupérer le jeton d'accès depuis le local storage
            const response = await axios.get('http://localhost:4000/events', {
                headers: {
                    Authorization: `${token}`, // Inclure le jeton d'accès dans l'en-tête de la requête
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
                    <h3>{event.event_name}</h3>
                    <p>{event.description}</p>
                    <p>Localisation : {event.location}</p>
                    {/* Affichez d'autres détails de l'événement si nécessaire */}
                </div>
            ))}
        </div>
    );
}

export default EventsList;
