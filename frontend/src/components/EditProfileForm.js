import React, { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { userAtom } from '../atom';
import { useNavigate } from "react-router-dom";

function EditProfileForm() {
    const navigate = useNavigate();
    const [user, setUser] = useAtom(userAtom);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    useEffect(() => {
        if (user.isLoggedIn) {
            fetch('http://localhost:4000/current_user', {
                headers: {
                    Authorization: `${localStorage.getItem('token')}`,
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    setFirstName(data.first_name);
                    setLastName(data.last_name);
                    setEmail(data.email);
                })
                .catch((error) => {
                    console.error('Erreur lors de la récupération des informations de l\'utilisateur :', error);
                });
        }
    }, [user.isLoggedIn]);

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch(`http://localhost:4000/users/${user.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${localStorage.getItem('token')}`,
            },
            body: JSON.stringify({
                user: {
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    password: password,
                    password_confirmation: passwordConfirmation,
                },
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                setUser((prevUser) => ({
                    ...prevUser,
                    first_name: data.first_name,
                    last_name: data.last_name,
                    email: data.email,
                }));
            })
            .catch((error) => {
                console.error('Erreur lors de la mise à jour du profil :', error);
            });
        navigate("/");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Modifier le profil</h2>
            <div>
                <label htmlFor="firstName">Prénom :</label>
                <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="lastName">Nom :</label>
                <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email :</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Mot de passe :</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="passwordConfirmation">Confirme ton mot de passe :</label>
                <input
                    type="password"
                    id="passwordConfirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Enregistrer les modifications</button>
        </form>
    );
}

export default EditProfileForm;
