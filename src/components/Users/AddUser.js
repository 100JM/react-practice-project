import Card from "../UI/Card";
import classes from "./AddUser.module.css"

const AddUser = (props) => {
    
    const addUserEvent = (e) => {
        e.preventDefault();
    };

    return(
        <Card className={classes.input}>
            <form onSubmit={addUserEvent}>
                <label htmlFor="userName">Name</label>
                <input type="text" id="userName"/>
                <label htmlFor="userAge">Age</label>
                <input type="number" id="userAge"/>
                <button type="submit">Add User</button>
            </form>
        </Card>
    );
};

export default AddUser;