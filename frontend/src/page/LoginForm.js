import React, { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { userAtom } from '../atom';
import Register from '../components/Register';
import Login from '../components/Login';
import Logout from '../components/Logout';
import "../styles/LoginForm.css";
import PasswordReset from '../components/PasswordReset';

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
            localStorage.removeItem('email');
        }
    }, [setUser, user.isLoggedIn]);

    return (
        <div>
            {user.isLoggedIn ? (
                <div>
                    <p>
                        Bienvenue sur votre espace, {firstName}.
                    </p>
                    <Logout />
                </div>
            ) : (
                <div id="LoginFormWrap">
                    <div className="title"> <p>Connecte toi ou inscris toi dès maintenant sur Sport<span id='text-orange'>ner</span> !</p> </div>
                    <div className="signup-form">
                    <Register />
                    </div>
                    <div className="signin-form">
                    <Login />
                    </div>
                    <PasswordReset/>
                </div>
            )}
        </div>
    );
}

export default Form;
