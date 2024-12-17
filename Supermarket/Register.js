import React, { useState } from 'react';

const Register = ({ users, setUsers }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // Add confirmation password

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    setUsers([...users, { name, email, password }]);
    alert('Registration successful! You can now log in.');
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="off" // Disable autocomplete
            style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="off" // Disable autocomplete
            style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="off" // Disable autocomplete
            style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            autoComplete="off" // Disable autocomplete
            style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
          />
          <button
            type="submit"
            style={{ width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
