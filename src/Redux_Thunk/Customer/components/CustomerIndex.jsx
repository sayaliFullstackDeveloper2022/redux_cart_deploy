import React from "react";
import { Route, NavLink, Routes } from 'react-router-dom'
import Home from "./Home";
import NewCustomer from "./NewCustomer";
import DisplayCustomer from './DisplayCustomer';

const CustomerIndex = () => {
    return (<>
        <div className="container-fluid ">
            <div className="row ">
                <div className="d-flex justify-content-center align-items-center bg-primary">
                    <NavLink className="btn rounded-0 border-0 fw-bold fs-4 border-end border-dark" exact="true" to="/">HOME</NavLink>
                    <NavLink className="btn rounded-0 border-0 fw-bold fs-4 border-end border-dark" exact="true" to="/new">NEW CUSTOMER</NavLink>
                    <NavLink className="btn border-0 fw-bold fs-4" exact="true" to="/display">DISPLAY</NavLink>
                </div>
            </div>
        </div>

        <Routes>
            <Route exact="true" path="/" element={<Home />} />
            <Route exact="true" path="/new" element={<NewCustomer />} />
            <Route exact="true" path="/update/:cust_id" element={<NewCustomer />} />
            <Route exact="true" path="/display" element={<DisplayCustomer />} />
        </Routes> 

        <div className="container-fluid text-center">
            <footer className="footer text-center ">
                <span className="text-muted">All Rights Reserved 2023 @SRG</span>
            </footer>
        </div>
    </>)

}
export default CustomerIndex;