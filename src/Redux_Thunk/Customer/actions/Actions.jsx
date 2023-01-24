import { customerRequest, customerFailure, fetchCustomerSuccess, deleteCustomerSuccess, singleCustomerSuccess,updateCustomerSuccess } from './ActionResponse'
import {newCustomerSuccess } from './ActionResponse';
import axios from 'axios';

const url = "http://localhost:5000/customers";

export const fetchCustomers = () => {
    return dispatch => {
        console.log("ACTION fetch::::");
        dispatch(customerRequest());
        axios.get(url)
            .then(data => {
                dispatch(fetchCustomerSuccess(data.data))
            })
            .catch(error => dispatch(customerFailure(error)))
    }
}

// export const fetchSingleCustomer = (id) => {
//     return dispatch => {
//         console.log("222222222222222");
//         console.log("ACTION single fetch::::");
//         dispatch(customerRequest());
//         axios.get(`url/${id}`)
//             .then(data => {
//                 dispatch(singleCustomerSuccess(data.data))
//             })
//             .catch(error => dispatch(customerFailure(error)))
//     }
// }

export const newCustomer = (tempUser) => (dispatch) => {
    axios.post(`${url}`, tempUser)
        .then(() => {
            dispatch(newCustomerSuccess())
            dispatch(fetchCustomers());
        })
        .catch(error => dispatch(customerFailure(error)))
}
export const updateCustomer = (id,tempUser) => (dispatch) => {
    axios.put(`${url}/${id}`, tempUser)
        .then(() => {
            dispatch(updateCustomerSuccess())
            dispatch(fetchCustomers());
        })
        .catch(error => dispatch(customerFailure(error)))
}

export const deleteCustomer = (id) => dispatch => {
    dispatch(customerRequest());
    axios.delete(`${url}/${id}`)
        .then(data => {
            dispatch(deleteCustomerSuccess())
            dispatch(fetchCustomers());
        })
        .catch(error => dispatch(customerFailure(error)))
}