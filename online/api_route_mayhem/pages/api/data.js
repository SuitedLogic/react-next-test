import { fetchUsers } from '../../lib/db';

export default function handler(req, res) {
  const users = fetchUsers();
  
  if (req.method === 'GET') {
    res.status(200).json({ data: users });
  } else {
    res.status(404).send('Route not found');
  }
}
