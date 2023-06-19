
import React, { useEffect } from 'react';

import { useAtom } from 'jotai';

import { userAtom } from '../atom';

import Register from '../page/register';

import Login from '../page/login';

import Logout from '../components/logout';



function Form() {

    const [user, setUser] = useAtom(userAtom);



    useEffect(() => {

        const token = localStorage.getItem("token");

        const storedEmail = localStorage.getItem("email");





        if (token && storedEmail) {

            setUser({

                isLoggedIn: true,

                email: storedEmail,

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

                    <p>Bienvenue sur votre espace, vous êtes connecté avec l'adresse e-mail suivante : {user.email} </p>


                    <Logout />

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