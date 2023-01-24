import React from "react";
import { fetchUsers, addUser } from './action/Action'
import { useSelector, useDispatch, connect } from "react-redux";
import { useEffect } from "react";
import Newuser from "./Newuser";

function IndexDemo({ userData, fetchUsers, addUser }) {
    console.log("INDEX::::::::::", userData);
    // const dispatch=useDispatch();
    const { users, loading, error } = userData;
    var newUser = { name: "Ram", username: "ram", email: "ram@gmail.com" }
    const clickHandler = () => {
        console.log("clicked");
        addUser(newUser);
    }
    useEffect(() => {
        console.clear();
        fetchUsers()
    }, [])
    return (
        <>
            <h1>WELCOME TO REDUX-THUNK</h1>
            <button onClick={clickHandler}>Add New</button>
            {loading && <h2>Loading....</h2>}
            {error && !loading && <h2>{error}</h2>}
            {users && users.map(item => {
                return <h1 key={item.id}>{item.id} {item.name}</h1>
            })}
        </>)
}
const mapStateToProps = (state) => {
    return {
        userData: state.Reducers,
    }
}
const mapDispatchToProps = (dispatch) => {
    console.log("IN Dispatch");
    return {

        fetchUsers: () => dispatch(fetchUsers()),
        addUser: (newUser) => dispatch(addUser(newUser))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(IndexDemo);
