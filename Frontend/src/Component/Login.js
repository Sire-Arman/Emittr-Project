import React, { useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/login', {
        username,
        password,
      });
      console.log('Login successful:', response.data);
      // Handle successful login, such as storing authentication token
    } catch (error) {
      console.error('Login failed:', error.response.data);
      // Handle login failure, such as displaying error message
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default MyComponent;
