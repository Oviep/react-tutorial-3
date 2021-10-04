import React, {useState} from 'react'
import './App.css';
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList]= useState([])
  
  const addUserHandler = (userName, userAge) => {

      // usersList.push({name:userName, age:userAge})
      setUsersList((previousData)=>{
        return [...previousData, { name: userName, age: userAge, id: Math.random().toString()}]
      })
    
    
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
