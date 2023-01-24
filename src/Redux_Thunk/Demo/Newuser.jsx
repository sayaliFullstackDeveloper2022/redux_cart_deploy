import React from "react";
import { fetchUsers, addUser } from './action/Action'
import { useSelector, useDispatch, connect } from "react-redux";
import { useEffect } from "react";

const Newuser=()=>{
    const newUser={name:"Ram",username:"ram",email:"ram@gmail.com"}

    const clickHandler=()=>{
        console.log("clicked");
        addUser(newUser);
    }
    return(<>
    <h1>Add New User</h1>
    <button onClick={clickHandler}>Add New</button>

    </>)
}
const mapStateToProps = (state) => {
    // console.log(state);
    return {
        
        userData: state.Reducers,
    }
}
const mapDispatchToProps = (dispatch) => {
    //const newUser={name:"Ram",username:"ram",email:"ram@gmail.com"}
console.log("IN Dispatch");
    return {
        
        // fetchUsers: () => dispatch(fetchUsers()),
        addUser: (newUser) => dispatch(addUser(newUser))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Newuser);