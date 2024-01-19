import { useState } from "react"

function ModalWindows({setShowModal, array, setArray}) {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [value3, setValue3] = useState('')


    return (
        <div className="modal-container">
        <div className="modal">
            <button className="modalExit" onClick={() => setShowModal(false)}>X</button>
            <input onChange={(ev) => setValue1(ev.target.value)} value={value1} type="text"  placeholder="Name"/>
            <input onChange={(ev) => setValue2(ev.target.value)} value={value2} type="text"  placeholder="Username"/>
            <input onChange={(ev) => setValue3(ev.target.value)} value={value3} type="text"  placeholder="Email"/>
            <button onClick={() => setArray([...array,{name:value1, username:value2, email:value3}])}>ADD</button>
        </div>
        <ul>
         {array.map((item) => {
          return(
                <li>
                  <p>{item.name}</p>
                  <p>{item.username}</p>
                  <p>{item.email}</p>
                </li>
          )
         })}
         </ul>
        </div>
        
    )
}

export default ModalWindows