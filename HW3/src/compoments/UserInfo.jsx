const UserInfo = ({ user }) => {
  return (
    <div>
      <h2>UserInfo</h2>
      {user && (
        <div className="USERS">
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Phone Number: {user.phone}</p>
          <p>Website: {user.website}</p>
          <p>Photo: <img src={user.photoUrl}/></p>
        </div>
      )}
    </div>
  )
}

export default UserInfo;