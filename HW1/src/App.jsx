import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  const user = [
    {
      id: 0,
      myName: 'Jamal'
    },
    {
      id: 1,
      surname: 'Imanov'
    },
    {
      id: 2,
      age: '18'
    }
  ]

  const [array, setArray] = useState(user)


  return (
    <div className='App'>
      <Header user = {array[0]}/>
      <Main user = {array[1]}/>
      <Footer user = {array[2]}/>
      
    </div>
  )
}

export default App