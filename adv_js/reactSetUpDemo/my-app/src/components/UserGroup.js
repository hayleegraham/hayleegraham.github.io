import User from "./User"
import UserData from "../data/Users"
import { useState } from 'react';

function UserGroup() {
    const [users, setUsers] = useState(UserData);
    function handleClick() {
        setUsers((u)=> 
        [...u,
        {name: "Poop", color: "brown", id: 3}])
       console.log("clicked")
    }
    return (
      <div className="UserGroup">
        <p>Click a colored box to add a new User.</p>
         {users.map((user)=> <User clickFunction = {handleClick} color= {user.color} user= {user.name} key= {user.id} />)} 
      </div>
    );
  }
  
  export default UserGroup;
  