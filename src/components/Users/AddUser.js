import { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css"
import Button from "../UI/Button";

const AddUser = (props) => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');

    const addUserEvent = (e) => {
        e.preventDefault();
        
        if(userName.trim().length === 0 || userAge.trim().length === 0){
            return;
        }

        if(+userAge < 1){
            return;
        }

        props.onUserList(userName, userAge);

        setUserName('');
        setUserAge('');
    };

    const userNameChangeEvt = (e) => {       
        setUserName(e.target.value);
    };

    const userAgeChangeEvt = (e) => {
        setUserAge(e.target.value);
    };

    return(
        <Card className={classes.input}>
            <form onSubmit={addUserEvent}>
                <label htmlFor="userName">Name</label>
                <input type="text" id="userName" value={userName} onChange={userNameChangeEvt}/>
                <label htmlFor="userAge">Age</label>
                <input type="number" id="userAge" value={userAge} onChange={userAgeChangeEvt}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;