import React, { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { userAtom } from '../atom';
import Register from '../page/register';
import Login from '../page/login';
import Logout from '../components/logout';
import EditProfileForm from '../components/EditProfileForm';

function Form() {
    const [user, setUser] = useAtom(userAtom);
    const [firstName, setFirstName] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        const storedEmail = localStorage.getItem('email');

        if (token && storedEmail) {
            fetch('http://localhost:4000/current_user', {
                headers: {
                    Authorization: `${token}`,
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    setFirstName(data.first_name);
                    setUser({
                        isLoggedIn: true,
                        email: storedEmail,
                    });
                })
                .catch((error) => {
                    console.error('Erreur lors de la récupération du prénom :', error);
                });
        }

        if (!token && !storedEmail && user.isLoggedIn) {
            // L'utilisateur est déconnecté, effacer les données du stockage local
            localStorage.removeItem('email');
        }
    }, [setUser, user.isLoggedIn]);

    return (
        <div>
            <h1>Mon espace</h1>
            {user.isLoggedIn ? (
                <div>
                    <p>
                        Bienvenue sur votre espace, {firstName}.
                    </p>
                    <Logout />
                    <EditProfileForm />
                </div>
            ) : (
                <div>
                    <Register />
                    <Login />
                </div>
            )}
        </div>
    );
}

export default Form;
