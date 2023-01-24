import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNote } from "./Actions/Actions";

import './sk.css'

const Sk_NewNote = () => {
    const [note, setNote] = useState({ title: '', completed: false });
    const [toggle, setToggle] = useState(true);
    const dispatch = useDispatch();
    const changeEvent = (e) => {
        const { name, value } = e.target;
        setNote((lastData) => {

            return {
                ...lastData,
                [name]: value,
            }
        });
    }

    const addNote = () => {
        dispatch(createNote(note))
        setNote({ title: '', content: '' });
    }
    const toggleItem = () => {
        // toggle ? setToggle(false) : setToggle(true)
        //setToggle(true)
    }
    return <>
        <div className="container">
            <div className="row">
                <div className="col col-sm col-lg">
                    <div>
                        <form className="d-flex flex-column justify-content-center align-items-center" onSubmit={(e) => e.preventDefault()}>
                            {toggle ? <input type='text' placeholder="Title..." name="title" value={note.title} onChange={changeEvent} /> : null}<br />
                            {/* <textarea placeholder="description..." name="content" value={note.content} onChange={changeEvent} onClick={toggleItem} /><br /> */}
                            {toggle ? <button className="button-div" onClick={addNote} >➕</button> : null}
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col col-sm col-lg">
                </div>
            </div>
        </div>

    </>
}

export default Sk_NewNote;