import React, { useState } from "react";
import { useAtom } from "jotai";
import { userAtom } from "../atom";

function NewEventForm() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [user] = useAtom(userAtom);
    const [attendees, setAttendees] = useState("");
    const [location, setLocation] = useState("");
    const [event_time, setEventTime] = useState("");
    const [event_date, setEventDate] = useState("");
    const [sport_id, setSportId] = useState("");

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleAttendeesChange = (event) => {
        setAttendees(event.target.value);
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleEventTimeChange = (event) => {
        setEventTime(event.target.value);
    };

    const handleEventDateChange = (event) => {
        setEventDate(event.target.value);
    };

    const handleSportIdChange = (event) => {
        setSportId(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newEvent = {
            event: {
                event_name: title,
                description: content,
                user_id: user.user_id, // Récupération de l'ID de l'utilisateur à partir de userAtom
                attendees: attendees,
                location: location,
                event_time: event_time,
                event_date: event_date,
                sport_id: sport_id,
            },
        };

        try {
            const token = localStorage.getItem("token");
            const response = await fetch("http://localhost:4000/events", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token ? token : user.token,
                },
                body: JSON.stringify(newEvent),
            });

            if (response.ok) {
                console.log("L'event a été créé avec succès");
            } else {
                console.error("Erreur lors de la création de l'event");
            }
        } catch (error) {
            console.error("Erreur lors de la création de l'event :", error);
        }
    };


    return (
        <div>
            <h2>Création d'un nouvel Event</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Titre :</label>
                    <textarea id="title" value={title} onChange={handleTitleChange} />
                </div>
                <div>
                    <label htmlFor="content">Description :</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={handleContentChange}
                    />
                </div>
                <div>
                    <label htmlFor="attendees">Participants :</label>
                    <textarea
                        id="attendees"
                        value={attendees}
                        onChange={handleAttendeesChange}
                    />
                </div>
                <div>
                    <label htmlFor="location">Localisation :</label>
                    <textarea
                        id="location"
                        value={location}
                        onChange={handleLocationChange}
                    />
                </div>
                <div>
                    <label htmlFor="event_time">Heure :</label>
                    <textarea
                        id="event_time"
                        value={event_time}
                        onChange={handleEventTimeChange}
                    />
                </div>
                <div>
                    <label htmlFor="event_date">Date :</label>
                    <textarea
                        id="event_date"
                        value={event_date}
                        onChange={handleEventDateChange}
                    />
                </div>
                <div>
                    <label htmlFor="sport_id">Sport :</label>
                    <textarea
                        id="sport_id"
                        value={sport_id}
                        onChange={handleSportIdChange}
                    />
                </div>
                <button type="submit">Créer le post</button>
            </form>
        </div>

    );
}

export default NewEventForm;
