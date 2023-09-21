import React, { useState } from 'react';
import AdminInterface from './AdminInterface'

function AdminAuth() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (username, password) => {
    if (username === 'admin' && password === 'password123') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  }
  
  const logout = () => {
    setIsLoggedIn(false);
  }

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <button onClick={logout}>Logout</button>
          <AdminInterface />
        </div>  
      ) : (
        <form onSubmit={e => {
          e.preventDefault();
          login(e.target.username.value, e.target.password.value);
        }}>
          <input type="text" name="username" />
          <input type="password" name="password" />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

export default AdminAuth;