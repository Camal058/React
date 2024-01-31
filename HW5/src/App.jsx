import { useState, useReducer } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [initialUsers, setArray] = useState([
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net"
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org"
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca"
    }
  ])
  const [users, dispatch] = useReducer(usersReducer, initialUsers);
  function handleAddTask(name, email, username) {
    dispatch({
      type: 'added',
      id: String(Number(users.at(-1).id) + 1),
      name: name,
      email: email,
      username: username
    });
  }
  function handleRemoveTask(id) {
    dispatch({
      type: 'removed',
      id: id,
    });
  }

  function usersReducer(users, action) {
    if (action.type === 'added') {
      return [
        ...users,
        {
          id: action.id,
          name: action.name,
          email: action.email,
          username: action.username
        },
      ];
    }else if(action.type === 'removed'){
      return users.filter((user) => user.id !== action.id)
    } else if(action.type === 'updated'){
      return users.map((user) => {
        if(user.id === action.id){
          return {...user, name: action.name, email: action.email, username: action.username}
        } else {
          return user
        }
      })
    }
  }
  return (
    <>
      <input type='text' onChange={(val) => setName(val.target.value)} placeholder='Name'/>
      <input type='text' onChange={(val) => setEmail(val.target.value)} placeholder='Email'/>
      <input type='text' onChange={(val) => setUsername(val.target.value)} placeholder='Username'/>
      <button onClick={() => handleAddTask(name, email, username)}>Add</button>
      <ul>
        {users.map((user) =>{
          return(
            <li key={user.id}>
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p>{user.username}</p>
              <button onClick={() => handleRemoveTask(user.id)}>Remove</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App