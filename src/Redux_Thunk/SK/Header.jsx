import React, { useEffect } from "react";
import { Routes, Route, NavLink } from 'react-router-dom';
import './sk.css'
import Sk_Notes from './Sk_Notes';
import Sk_NewNote from './Sk_NewNote';
import { useDispatch, useSelector } from "react-redux";
import { getNotes } from "./Actions/Actions";
import Note_Creator from './Reducers/Reducers'
const Header = () => {


    // const dispatch = useDispatch();
    // const temp = useSelector(state => Note_Creator);

    // useEffect(() => {
    //     dispatch(getNotes());
    // }, [])

    return <>
        <div className="container">
            <div className="row">
                <div className="col col-sm col-lg">
                    <div className="h1">Deepstambh</div>
                    <div>
                        <NavLink className="btn border-0 " exact="true" to="/">Add Note</NavLink>
                        <NavLink className="btn border-0 "exact="true" to="/all">Display All</NavLink>
                    </div>
                </div>
            </div>

        </div>





        <Routes>
            <Route exact path="/" element={<Sk_Notes />} />
            <Route path="/new" element={<Sk_NewNote />} />
        </Routes>
    </>
}

export default Header;