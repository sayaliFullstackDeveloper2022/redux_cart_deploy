import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector ,connect} from "react-redux";
import { getNotes } from "./Actions/Actions";
// import Note_Creator from './Reducers/Reducers'

import './sk.css'
import Sk_singleNote from "./Sk_singleNote";

const Sk_Notes = ({userData,fetchNotes,addNote}) => {


return (<>
        {/* <h1>TEMP:::::::::::::::::{temp.length}</h1>
        {
            
            temp.map(item => {
                return <Sk_singleNote tempNote={item} />
            })
        } */}
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

        // fetchUsers: () => dispatch(fetchNotes()),
        // addUser: (newNote) => dispatch(addNote(newNote))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sk_Notes);
