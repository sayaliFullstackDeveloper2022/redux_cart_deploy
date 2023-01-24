import React, { useState,useEffect } from "react";
import Header from './Header'
import CreateNote from "./CreateNote";
import NoteList from "./NoteList";
import Footer from './Footer'
import { useDispatch, useSelector } from "react-redux";
import {getNotes,createNote,deleteNote} from './Actions/Actions';

const NoteIndex = () => {
  const dispatch=useDispatch();
  //const [noteItems, setNoteItems] = useState([]);
  const newState=useSelector(state=>state.Note_Creator);

  // const addNotes = (note) => {
  //   dispatch(createNote(note))
  //   setNoteItems((oldData) => {
  //     return [...oldData, ]
  //   })

  // }

  const onDelete = (deleteId) => {
    dispatch(deleteNote(deleteId))
    // setNoteItems((oldData) =>
    //   oldData.filter((ele, index) => {
    //     return index !== deleteId;
    //   })
    // )
  }
  useEffect(() => {dispatch(getNotes())}, [])

  return (<>
    <Header />
    {/* <CreateNote passNote={addNotes} />*/}
    {
      newState.length>0?<div style={{ display: "flex" }}>
      {
        // console.log("INDEX:::::::::::::::::::::",newState)}{
        newState.map((item, index) => {
          console.log("calling me 😄");
          return <NoteList key={index} id={index} title={item.title} content={item.content} delete={onDelete} />
        })
      }
    </div>:null }
    <Footer />

  </>)
}

export default NoteIndex;