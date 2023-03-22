import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    if (username === '' || password === '') {
      setErrorMessage('Username and password are required.');
    } else {
      // Do something with the username and password, such as logging in
      console.log('Logged in with', username, password);
    }
  };

  return (
    <div>
    <form onSubmit={handleLogin}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit">Log In</button>
      <div id="errorMessage">{errorMessage}</div>
    </form>
    </div>
  );
};

export default LoginForm;
