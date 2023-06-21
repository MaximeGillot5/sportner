import React, { useState } from 'react';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [requestStatus, setRequestStatus] = useState('pending');

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`http://localhost:4000/passwords/forgot?email=${email}`, {
      method: 'POST',
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

  function renderMessage() {
    switch (requestStatus) {
      case 'success':
        return (
          <div>
            Ta demande de réinitialisation de mot de passe a bien été envoyée.
          </div>
        );
      case 'not-found':
        return (
          <div>
            Cette adresse n'est pas enregistrée, rejoins-nous !
            <button onClick={() => setRequestStatus('pending')}>Réessayer</button>
          </div>
        );
      case 'error':
        return (
          <div>
            Une erreur s'est produite pendant la demande.
            <button onClick={() => setRequestStatus('pending')}>Réessayer</button>
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {requestStatus === 'pending' && (
          <label>
            Adresse email :
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
        )}
        <button type='submit' disabled={requestStatus !== 'pending'}>
          Envoyer demande
        </button>
      </form>
      {renderMessage()}
    </div>
  );
};

export default PasswordReset;
