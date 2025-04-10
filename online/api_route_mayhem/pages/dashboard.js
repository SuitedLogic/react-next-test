/**
 *  Tasks:
 *  "CORS Crusher" (Junior): Frontend gets CORS errors when fetching data
 *  "Data Sanitizer" (Mid): Dashboard exposes secret keys in network tab
 *  "Auth Architect" (Senior): Add JWT verification middleware to API route
 */

import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(res => {
        const userArray = Array.isArray(res.data) ? res.data : [];
        setUsers(userArray);
      })
      .catch(error => {
        console.error(error);
        setUsers([]);
      });
  }, []);

  return (
    <div>
      <h1>User Dashboard</h1>
      {Array.isArray(users) && users.map(user => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>Permissions: {user.permissions}</p>
        </div>
      ))}
    </div>
  );
}
