import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UserList';

function App() {
  const [userList, setUserList] = useState([]);

  const userListEvent = (uName, uAge) => {
    setUserList((preUserList) => {
      return [...preUserList, {name : uName, age : uAge, id : Math.random()}];
    });
  };

  return (
    <div>
        <AddUser onUserList={userListEvent}/>
        <UsersList users={userList}/>
    </div>
  );
}

export default App;
