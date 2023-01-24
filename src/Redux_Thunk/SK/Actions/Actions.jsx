import {GET_NOTES,DELETE_NOTE,UPDATE_NOTE,CREATE_NOTE} from '../Note_Constant';
import axios from 'axios';

export const getNotes=()=>async dispatch=>{
    const response=axios.get("https://jsonplaceholder.typicode.com/todos");
    console.log("ACTION::::::::::::::",response);
    dispatch ({
        type:GET_NOTES,
        payload:response
    })
}
export const createNote=(note)=>async (dispatch)=>{
    const response=axios.post("https://jsonplaceholder.typicode.com/todos",note);
    dispatch ({
        type:CREATE_NOTE,
        payload:response.data
    })
}
export const deleteNote=(id)=>async (dispatch)=>{
    const response=axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    dispatch ({
        type:DELETE_NOTE,
        payload:response
    })
}

// export const updateNote=(note)=>async (dispatch)=>{
//     const response=axios.put(`https://jsonplaceholder.typicode.com/todos/${note.id}`,note);
//     dispatch ({
//         type:UPDATE_NOTE,
//         payload:response.data
//     })
// }
