import React, { useEffect, useMemo, useState, useCallback } from "react";
import { connect, useDispatch } from "react-redux";
import { fetchCustomers, deleteCustomer } from "../actions/Actions";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-alpine.css';
import { useNavigate } from 'react-router-dom';
import { useRef } from "react";


const DisplayCustomer = ({ userData, fetchCustomers }) => {
    const { customers, loading, error } = userData;
    const [search, setSearch] = useState(false)
    const tempRef = useRef();
    const dispatch = useDispatch();
    let navigate = useNavigate();
    useEffect(() => {
        fetchCustomers()
    }, [])
    const [columnDefs, setColumnDefs] = useState([
        { field: 'id', headerClass: 'bg-primary text-light fs-6' },
        { field: 'name', headerClass: 'bg-primary text-light fs-6' },
        { field: 'email', headerClass: 'bg-primary text-light fs-6' },
        { field: 'contact', headerClass: 'bg-primary text-light fs-6' },
        {
            fiels: "", headerClass: 'bg-primary text-light fs-6',
            cellRendererFramework: (params) => <div>
                <button className="btn bg-primary fw-bold " onClick={() => editHandler(params.data.id)} >Edit</button>
                <button className="btn bg-primary fw-bold mx-3" onClick={() => deleteHandler(params.data.id)} >Del</button>
            </div>
        }

    ]);
    // const defaultColDef = useMemo(() => {
    //     return {
    //         editable: true,
    //     };
    // }, []);

    const deleteHandler = (val) => {
        dispatch(deleteCustomer(val))
    }

    const editHandler = (p) => {
        navigate(`/update/${p}`)
    }

    const getRowId = useCallback((params) => {
        return params.data.id
    }, [])
    const getSearch = (nm) => {
        return console.log(customers.find(it => it.name === nm))
    }

    const onSearch = useCallback(() => {
       
        tempRef.current.api.setQuickFilter(
            document.getElementById('txt_search').value
        );
    }, []);

    return <>
        <div className="container-fluid bg-light">
            <div className=" row py-1">
                <div className="m-auto">
                    {loading && <h2>Loading....</h2>}
                    {error && !loading && <h2>{error}</h2>}

                    <div className="ag-theme-alpine mx-auto" style={{ height: '80vh', width: "160vh" }} >
                        {/* <div > */}
                            <div className="d-flex justify-content-center my-2">
                                <input
                                    className="px-2 py-1 fs-5"
                                    type="text"
                                    id="txt_search"
                                    placeholder="Search..."
                                    onInput={onSearch} />
                                {/* <button className="btn py-0 mx-2 mb-0 bg-primary fs-5 fw-bold" onClick={onSearchByName}>Search</button> */}
                            </div>
                            {customers && <AgGridReact
                                ref={tempRef}
                                getRowId={getRowId}
                                rowSelection={'multiple'}
                                rowData={customers}
                                columnDefs={columnDefs}
                            ></AgGridReact>}
                        {/* </div> */}


                    </div>
                    {/* <table ref={tempRef} className="w-100 text-center table table-hover">
                        <thead>
                            <tr className="bg-info text-uppercase text-center ">
                                <th className="fw-bold">Cid</th>
                                <th className="fw-bold">Name</th>
                                <th className="fw-bold">Contact</th>
                                <th className="fw-bold">Email</th><th></th>
                            </tr></thead>
                        <tbody>
                            {
                                customers && customers.map((item) => {
                                    return (
                                        <tr>

                                            <td><label className="border-0 w-25 text-center">{item.id} </label></td>
                                            <td>{item.name}</td>
                                            <td>{item.contact}</td>
                                            <td>{item.email}</td>
                                            <td><div>
                                                <button className="btn bg-primary fw-bold " onClick={() => editHandler(item.id)} >Edit</button>
                                                <button className="btn bg-primary fw-bold mx-3" onClick={() => deleteHandler(item.id)} >Del</button>
                                            </div></td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table> */}
                </div>
            </div>
        </div>
    </>

}
const mapStateToProps = (state) => {
    return {
        userData: state.Reducers,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchCustomers: () => dispatch(fetchCustomers()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayCustomer);