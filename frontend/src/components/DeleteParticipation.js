import React from 'react';
import axios from 'axios';

const DeleteParticipation = ({ eventId, onDelete }) => {

    const deleteParticipation = async () => {
        try {
            await axios.delete(`http://localhost:4000/participations/${eventId}`, {
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
            <button id='deleteButton' onClick={deleteParticipation}>Supprimer votre participation</button>
        </div>
    );
};

export default DeleteParticipation;
