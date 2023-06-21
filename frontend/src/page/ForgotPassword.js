import React, { useState } from 'react';

const PasswordChange = () => {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [password, setNewPassword] = useState('');
  const [requestStatus, setRequestStatus] = useState('pending');

  function handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:4000/passwords/reset', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        token,
        password
      })
    })
      .then((response) => {
        if (response.ok) {
          setRequestStatus('success');
        } else if (response.status === 404) {
          setRequestStatus('not-found');
        } else {
          setRequestStatus('error');
        }
      })
      .catch((error) => {
        console.error(error);
        setRequestStatus('error');
      });
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleTokenChange(event) {
    setToken(event.target.value);
  }

  function handleNewPasswordChange(event) {
    setNewPassword(event.target.value);
  }

  function renderForm() {
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Adresse email :
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
        </div>
        <div>
          <label>
            Token :
            <input type="text" value={token} onChange={handleTokenChange} />
          </label>
        </div>
        <div>
          <label>
            Nouveau mot de passe :
            <input type="password" value={password} onChange={handleNewPasswordChange} />
          </label>
        </div>
        <button type='submit'>Réinitialiser le mot de passe</button>
      </form>
    );
  }

  function renderMessage() {
    switch (requestStatus) {
      case 'success':
        return (
          <div>
            Le mot de passe a été modifié avec succès.
          </div>
        );
      case 'not-found':
        return (
          <div>
            Adresse email ou token incorrect.
          </div>
        );
      case 'error':
        return (
          <div>
            Une erreur s'est produite, veuillez réessayer plus tard.
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <div>
      {renderForm()}
      {renderMessage()}
    </div>
  );
};

export default PasswordChange;
