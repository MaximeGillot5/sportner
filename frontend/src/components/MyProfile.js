import React, { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { userAtom } from '../atom';

const MyProfile = () => {
  const [user, setUser] = useAtom(userAtom);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [zipCode, setZipCode] = useState('');

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
          setLastName(data.last_name);
          setEmail(data.email);
          setZipCode(data.zip_code);
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
    <div id='Cadre'>
      <div className='ProfileTitle'>
        <h1>Mon profil</h1>
      </div>
      <div id='Profile'>
        <div id='ProfilePic'>
          <h1>Photo de profil</h1>
        </div>
        <div id="ProfileInfos">
          <h1 className='category' >Prénom : {firstName}</h1>
          <h1 className='category'>Nom : {lastName}</h1>
          <h1 className='category'>Adresse email : {email}</h1>
          <h1 className='category'>Code postal : {zipCode}</h1>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
