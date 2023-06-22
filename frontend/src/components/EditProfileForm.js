import React, { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { userAtom } from '../atom';

function EditProfileForm() {
  const [user, setUser] = useAtom(userAtom);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

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
          zip_code: zipCode,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setUser((prevUser) => ({
          ...prevUser,
          first_name: data.first_name,
          last_name: data.last_name,
          zip_code: data.zip_code,
          email: data.email,
        }));
        console.log(firstName);
        // window.location.reload();
      })
      .catch((error) => {
        console.error('Erreur lors de la mise à jour du profil :', error);
      });
  };

  return (
    <div id='Cadre'>
    <form onSubmit={handleSubmit}>
      <h2 className='ProfileTitle'>Modifier le profil</h2>
      <div>
        <input
          type="text"
          id="firstName"
          placeholder="Prénom"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="text"
          id="lastName"
          placeholder="Nom"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="password"
          id="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="password"
          id="passwordConfirmation"
          placeholder="Confirmation du mot de passe"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="number"
          id="zip_code"
          placeholder="Code Postal"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          required
        />
      </div>
      <button type="submit">Enregistrer les modifications</button>
    </form>
    </div>
  );
}

export default EditProfileForm;
