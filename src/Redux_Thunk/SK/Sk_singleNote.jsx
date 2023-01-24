
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNote } from "./Actions/Actions";

import './sk.css'

const Sk_singleNote = (props) => {

    // const dispatch = useDispatch();
    // const temp = useSelector(state => state);

    // useEffect(() => {
    //     dispatch(getNotes());
    // }, [])

    return (<>

        <div className="container">
            <div className="row">
                <div className="col col-sm col-lg">
                    <h2>{props.tempNote.title}</h2>
                    {/* <p>{props.content}</p> */}
                    <button className="button-div" >Del</button>
                    {/* onClick={deleteNote}><DeleteOutlineIcon /> */}
                </div>
            </div>
        </div>

    </>)
}

export default Sk_singleNote;

