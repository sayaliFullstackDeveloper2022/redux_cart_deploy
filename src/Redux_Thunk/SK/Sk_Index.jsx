import React, { useState, useEffect } from "react";
import Header from './Header'
import Footer from './Footer'
import { Routes, Route, NavLink } from 'react-router-dom';
import Sk_Notes from './Sk_Notes';
import Sk_NewNote from './Sk_NewNote';
import { useDispatch, useSelector } from "react-redux";
import { getNotes, createNote, deleteNote } from './Actions/Actions';
// import Note_Creator from './Reducers/Reducers'

const Sk_Index = () => {

  // const temp = useSelector(state => Note_Creator);
  const temp = useSelector((state) => state.Note_Creator);
  const dispatch = useDispatch();

  console.log("Index TEMP:::::::::::::", temp);

  useEffect(() => {
    dispatch(getNotes());
  }, []);

  return (<>
    <div className="container">
      <div className="row">
        <div className="col col-sm col-lg">
          <div className="h1">Deepstambh</div>
          <div>
            <NavLink className="btn border-0 " exact="true" to="/">Add Note</NavLink>
            <NavLink className="btn border-0 " exact="true" to="/all">Display All</NavLink>
          </div>
        </div>
      </div>

    </div>





    <Routes>
      <Route path="/" element={<Sk_NewNote />} />

      <Route exact path="/all" element={<Sk_Notes />} />
    </Routes>
    {/* <Header />
   
    <Footer /> */}


  </>)
}

export default Sk_Index;