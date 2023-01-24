import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const NoteList=(props)=>{
    const deleteNote=()=>{
        props.delete(props.id);
    }
    return (<>
        <div className="note-div">
            <h2>{props.title}</h2>
            {/* <p>{props.content}</p> */}
            <button className="button-div" onClick={deleteNote}><DeleteOutlineIcon/></button>
            
        </div>
    </>);
}



export default NoteList;