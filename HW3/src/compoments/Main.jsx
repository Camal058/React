import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';


const Main = ({ onSelectUser }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const usersPhotos = response.data.map(user => ({
          ...user,
          photoUrl: `https://api.third-party-service.com/photos/${user.id}`
        }));
        setUsers(usersPhotos);
      } catch (error) {
        console.error('Error', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id} onClick={() => onSelectUser(user)}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  )
};

export default Main;