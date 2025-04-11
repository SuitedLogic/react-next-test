import React, { JSX } from 'react';

interface UserCardProps {
  user: {
    id: number;
    name: string;
    lastLogin: string;
  };
}

export default function UserCard({ user }: UserCardProps): JSX.Element {
  return (
    <div style={{ border: '1px solid red', margin: '10px' }}>
      <h2>{user.name}</h2>
      <p>Last login: {new Date(user.lastLogin).toLocaleString()}</p>
    </div>
  );
}