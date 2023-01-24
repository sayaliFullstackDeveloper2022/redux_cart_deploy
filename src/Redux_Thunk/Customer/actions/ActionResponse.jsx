
export const customerRequest=()=>{
    console.log("in customer request");
    return{
        type:"CUSTOMER_REQUEST",
    }
}

export const customerFailure=(error)=>{
    return{
        type:"CUSTOMER_FAILURE",
        payload:error
    }
}

export const fetchCustomerSuccess=(customers)=>{
    // console.log("AAAAAAAAAAAAAAAAAA",customers);
    return{
        type:"FETCH_SUCCES",
        payload:customers
    }
}

export const newCustomerSuccess=(customer)=>{
    console.log("in new customer success",customer);

    return{
        type:"NEW_CUSTOMER_SUCCESS",
        payload:customer
    }
}

export const deleteCustomerSuccess=()=>{
    console.log("in delete:");
    return{
        type:"DELETE_CUSTOMER_SUCCESS",
        // payload:cid
    }
}
export const updateCustomerSuccess=()=>{
    console.log("in update:");
    return{
        type:"UPDATE_CUSTOMER_SUCCESS",
        // payload:cid
    }
}

// export const singleCustomerSuccess=(customer)=>{
//     console.log("33333333333333333333333333");

//     console.log("in single customer success",customer);

//     return{
//         type:"SINGLE_CUSTOMER_SUCCESS",
//         payload:customer
//     }
// }
