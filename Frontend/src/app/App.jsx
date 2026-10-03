import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [user, setUsers] = useState({});

  useEffect(() => {
    axios
      .get('/api/getMe')
      .then((res) => {
        setUsers(res.data.user || {});
      })
      .catch((error) => {
        console.error('Failed to fetch user:', error);
      });
  }, []);

  return (
    <div className="app-shell">
      <div className="app-card">
        <h1>Welcome Back {user.fullName || 'there'}</h1>
        <h2>{user.email || 'Loading...'}</h2>
        <h3>{user.role || 'Role unavailable'}</h3>
      </div>
    </div>
  );
};

export default App;
