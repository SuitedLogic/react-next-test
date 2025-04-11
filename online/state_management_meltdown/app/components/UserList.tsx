import { JSX, useEffect, useState } from 'react';
import UserCard from './UserCard';

interface User {
  id: number;
  name: string;
  lastLogin: string;
}

export default function UserList(): JSX.Element {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {users.map(user => (
        <UserCard 
          key={user.id} 
          user={user} 
        />
      ))}
    </div>
  );
}