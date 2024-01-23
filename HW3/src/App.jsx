import { useState } from 'react'
import './App.css'
import Main from './compoments/Main';
import UserInfo from './compoments/UserInfo';

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className='App'>
      <Main onSelectUser={handleSelectUser} />
      <UserInfo user={selectedUser} />
    </div>
  );
};

export default App;