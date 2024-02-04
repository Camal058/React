import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAddData, fetchDeleteData } from "../reduxtoolkit/getUsersData"
import { fetchContent } from "../reduxtoolkit/reducer"

function Admin() {
  let [name, setName] = useState('')
  let [description, setDescription] = useState('')
  let [price, setPrice] = useState('')
  let [storeName, setStoreName] = useState('')
  let [storeAdress, setStoreAdress] = useState('')

  let [showModal, setShowModal] = useState({ active: false, action: '' })
  let [flag, setFlag] = useState(false)


  let dispatch = useDispatch()
  let usersArray = useSelector((state) => state.goods.usersArray)
  let addingInfo = useSelector((state) => state.goods.addingInfo)
  let deleting = useSelector((state) => state.goods.deletingInfo)


  useEffect(() => {
    dispatch(fetchContent())
  }, [dispatch, flag])

  return (
    <div className="admin">
      <h1>ADMIN</h1>
      <form onSubmit={(ev) => ev.preventDefault()}>
        <input onChange={(ev) => setName(ev.target.value)} type="text" placeholder="name"/>
        <input onChange={(ev) => setDescription(ev.target.value)} type="text" placeholder="description"/>
        <input onChange={(ev) => setPrice(ev.target.value)} type="text" placeholder="price"/>
        <input onChange={(ev) => setStoreName(ev.target.value)} type="text" placeholder="store name"/>
        <input onChange={(ev) => setStoreAdress(ev.target.value)} type="text" placeholder="adress"/>
        <button onClick={() => {
          dispatch(fetchAddData({
            product_name: name,
            product_description: description,
            product_price: price,
            store_name: storeName,
            store_address: storeAdress,
          }))
          setFlag(!flag)
          setShowModal({ active: true, action: 'ADD' })
        }}>ADD</button>
      </form>


      <ul className="goods">
        {usersArray.map((item) => {
          return (
            <li key={item.id}>
              <p>{item.product_name}</p>
              <p>{item.product_description}</p>
              <p>{item.product_price}</p>
              <p>{item.store_name}</p>
              <p>{item.store_address}</p>
              <button onClick={() => {
                dispatch(fetchDeleteData(item.id))
                setFlag(!flag)
                setShowModal({ active: true, action: 'DELETE' })
              }}>DELETE</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Admin