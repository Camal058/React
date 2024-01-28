function UserData({user, setState}){
    console.log(user);
    return(
        <>
        <div className='info'>
            <div>
                <h1>Info</h1>
                <p>{user.name}</p>
                <p>{user.username}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <p>{user.website}</p>
                <h1>Address</h1>
                <p>{user.address.street}</p>
                <p>{user.address.city}</p>
                <h1>Company</h1>
                <p>{user.company.name}</p>
                <p>{user.company.catchPhrase}</p>
                <p>{user.company.bs}</p>
                
            </div>
        </div>
        <button onClick={() => setState(false)}>Back</button>
        </>
    )
}

export default UserData