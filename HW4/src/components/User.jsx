function User({users, setState, setUser}){
    return(
        <>
        <div className='box'>
            {users.map((item) => {
            return(
            <div key={item.id}>
                <h2>User {item.id}</h2>
                <p>{item.name}</p>
                <p>{item.username}</p>
                <p>{item.email}</p>
                <button onClick={() => { setState(true) , setUser(item)}}>View</button>
            </div>
            )
            })}
        </div>
        </>
    )
}

export default User