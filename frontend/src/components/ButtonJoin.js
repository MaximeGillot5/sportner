import React from "react";
import axios from "axios";
import { useAtom } from "jotai";
import { userAtom } from "../atom";
import { useNavigate } from "react-router-dom";

const ButtonJoin = ({ eventId }) => {
    const [, setUser] = useAtom(userAtom);
    const navigate = useNavigate();

    const handleJoin = () => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login");
            alert("Veuillez vous connecter pour participer à une séance !")
            return;
        }

        const participationData = {
            user_id: localStorage.getItem("id"),
        };

        axios
            .post(
                `http://localhost:4000/events/${eventId}/participations`,
                participationData,
                {
                    headers: {
                        Authorization: token ? token : "",
                    },
                }
            )
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return <div id="buttonContainer">
        <button id="buttonParticipation" onClick={handleJoin}>Participer</button>
    </div>;
};

export default ButtonJoin;
