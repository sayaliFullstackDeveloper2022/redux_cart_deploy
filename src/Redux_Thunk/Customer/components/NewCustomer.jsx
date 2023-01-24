import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { fetchCustomers, newCustomer, updateCustomer } from "../actions/Actions";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

const NewCusomer = (params) => {
    const [uid, setUid] = useState(0);
    const [header,setHeader]=useState("New Customer Details");
    const [data, setData] = useState({ id: uid, name: "", email: "", contact: "" })
    const temp =  useSelector((state) => state.Reducers)
    let navigate = useNavigate();

    const { cust_id } = useParams();
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setData(oldVal => {
            return {
                ...oldVal,
                [name]: value,
                id: uid
            }
        })
    }
    

    const submitHandler = (e) => {
        e.preventDefault();
        const btn = e.target.innerHTML
        console.log(btn);
        console.log(e.target.innerText);
        if(btn==='Add'){
            params.newCustomer(data);
            setData({ id: setUid(uid + 1), name: "", contact: "", email: "" })
        }
        else if(btn==='Update'){
            params.updateCustomer(cust_id,data);
            setData({ id: setUid(uid + 1), name: "", contact: "", email: "" })

        }
        navigate("/display")
    }


    useEffect(() => {
        params.fetchCustomers();
        

        if (params.userData.customers && cust_id != undefined) {
            setHeader("Update Customer Details")
            let res= (params.userData.customers).find((it)=>it.id==cust_id)
            setData(res);
            setUid(res.id)
        }
        else{
            setHeader("New Customer Details")
            let len = temp.customers.length-1;
            len > 1 ? setUid((temp.customers[len]).id + 1) : setUid(0)
            setData({ id: uid, name: "", contact: "", email: "" })
        }
    }, [cust_id])

    return (<>
        <div className="container ">
            <div className=" row py-1">
                <div className="bg-primary m-auto w-50 rounded-5 py-2">
                    <h2 className="text-capitalize text-center fw-bold text-light">{header}</h2><hr />
                    <form >
                        <div className="d-flex flex-column p-2 justify-content-center align-items-center fs-5">
                            <div ><label >Cust Id :  {uid}</label></div>
                            <div className="my-2"><label className="">Name : </label><input type="text" onChange={changeHandler} value={data.name} name="name" required /></div>
                            <div className="my-2"><label className="">Contact : </label><input type="number" onChange={changeHandler} value={data.contact} name="contact" required /></div>
                            <div className="my-2"><label className="">Email : </label><input type="email" onChange={changeHandler} value={data.email} name="email" required /></div>
                            <div className="mt-4"><button type="submit" className="btn bg-light mx-4 fw-bold fs-5" onClick={submitHandler}>
                                { cust_id==undefined? "Add" : "Update"}
                                
                                </button>
                                </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </>)
}

const mapStateToProps = (state) => {
    return {
        userData: state.Reducers,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

        fetchCustomers: () => dispatch(fetchCustomers()),
        newCustomer: (customer) => dispatch(newCustomer(customer)),
        // fetchSingleCustomer: (id) => dispatch(fetchSingleCustomer(id)),
        updateCustomer:(id,customer)=>dispatch(updateCustomer(id,customer))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCusomer);