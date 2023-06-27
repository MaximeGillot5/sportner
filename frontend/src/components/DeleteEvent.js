import React from 'react';
import axios from 'axios';

const DeleteEvent = ({ eventId, onDelete }) => {

    const deleteEvent = async () => {
        try {
            await axios.delete(`http://localhost:4000/events/${eventId}`, {
                headers: {
                    Authorization: `${localStorage.getItem('token')}`,
                },
            });
            onDelete();
            window.location.reload();
        } catch (error) {
            console.error(error);
            window.location.reload();
        }
    };

    return (
        <div id="buttonContainer">
            <button id='deleteButton' onClick={deleteEvent}>Supprimer la séance</button>
        </div>
    );
};

export default DeleteEvent;
