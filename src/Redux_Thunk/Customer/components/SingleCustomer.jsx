import React, { useEffect, useId, useRef } from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { deleteCustomer } from "../actions/Actions";
import NewCustomer from "./NewCustomer";

const SingleCustomer = (props) => {
    const [editState,setEditState]=useState(false);
    const {id,name,email,contact}=props.customer
    // console.log("SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS:",editState);
    const [data, setData] = useState({ id:id, name: name, email: email, contact: contact })
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setData(oldVal => {
            return {
                ...oldVal,
                [name]: value,
            }
        })
    }
    let rowref=useRef();
    const dispatch = useDispatch();

    const deleteHandler = (val) => {
        dispatch(deleteCustomer(val))
    }
    const editeHandler = (val) => {
        setEditState(!editState);
        console.log("SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS:",editState);
        // rowref.readOnly=false;
    }
    return <>

<tr>
           
           <td><label className="border-0 w-25 text-center">{data.id} </label></td>
           <td><input ref={ rowref} className="border-0 w-25 text-center" type="text" value={data.name} 
           onChange={changeHandler} readOnly={editState} name="name "/></td>
           <td>{data.contact}</td>
           <td>{props.customer.email}</td>
           <td><button className="btn bg-info mx-4"
               onClick={() => deleteHandler(data.id)}> DEL </button>
               <button className="btn bg-info mx-4"
                   onClick={() => editeHandler(data.id)}> EDIT </button></td>
       </tr>
        {/* <tr>
           
            <td>{props.customer.id} </td>
            <td>{props.customer.name}</td>
            <td>{props.customer.contact}</td>
            <td>{props.customer.email}</td>
            <td><button className="btn bg-info mx-4"
                onClick={() => deleteHandler(props.customer.id)}> DEL </button>
                <button className="btn bg-info mx-4"
                    onClick={() => editeHandler(props.customer.id)}> EDIT </button></td>
        </tr> */}
    </>

}


export default SingleCustomer;