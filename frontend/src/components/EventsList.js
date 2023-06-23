import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Moment from 'moment';
import ButtonJoin from './ButtonJoin';
import ParticipationsList from './ParticipationsList';


function EventsList() {
    const [events, setEvents] = useState([]);
    const [participants, setParticipants] = useState([]);

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
            setParticipants(response.data.participants)
            console.log(response.data)
        } catch (error) {
            console.error('Erreur lors de la récupération des événements :', error);
        }
    };

    return (

        <div id='cardsContainer'>
            {events.map((event) => (
                <div id='eventCard' key={event.id}>
                    <h3>Nom : {event.event_name}</h3>
                    <p>Description :{event.description}</p>
                    <p>Localisation : {event.location}</p>
                    <p>{Moment(event.event_time).format('HH:mm')}</p>
                    <ButtonJoin eventId={event.id} />
                    <ParticipationsList eventId={event.id} />
                </div>
            ))}
        </div>

    );
}

export default EventsList;

