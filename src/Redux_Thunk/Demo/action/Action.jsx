import axios from "axios"

const getUserSuccess = (users) => {
    return {
        type: "GET_USER_SUCCESS",
        payload: users
    }
}


const getUserFailure = (error) => {
    return {
        type: "GET_USER_FAILURE",
        payload: error
    }
}


const getUserRequest = () => {
    return {
        type: "GET_USER_REQUEST"
    }
}

const newUserSuccess = (users) => {
    return {
        type: "NEW_USER_SUCCESS",
        payload: users
    }
}


const newUserFailure = (error) => {
    return {
        type: "NEW_USER_FAILURE",
        payload: error
    }
}


const newUserRequest = () => {
    return {
        type: "NEW_USER_REQUEST"
    }
}

const url = "https://jsonplaceholder.typicode.com/users";

// export const fetchUsers = () =>async (dispatch) => {

//     dispatch(getUserRequest())

//     try {
//         const res = await axios.get(`http://jsonplaceholder.typicode.com/users`)
//         dispatch(getUserSuccess(res))
//     }
//     catch (e) {
//         dispatch(getUserFailure(e))
//     }
//     //     axios.get(url)
// //         .then((response) => response.json())
// //         .then(data => dispatch(getUserSuccess(data)))
// //         .catch((error) => dispatch(getUserFailure(error)))

// }



export const fetchUsers = () => {

    return async (dispatch) => {
        dispatch(getUserRequest())

        fetch(url, { method: "GET" })
            .then((response) => response.json())
            .then(data => {
                const users = data;
                dispatch(getUserSuccess(users))
            }).catch(err => {
                const error = err.message;
                dispatch(getUserFailure(error))
            })
    }
}


export const addUser = (tempUser) => {
    console.log("Action::::", tempUser);
    return async (dispatch) => {
        console.log("in dispatch::::", tempUser);
        dispatch(newUserRequest())

        axios.post(url, tempUser)
        // .then((response) => response.json())
            .then(data => {
                // console.log("NEW DATA:::::::::::::::",);
        dispatch(newUserSuccess(data.data))
        }).catch(err => {
            const error = err.message;
            dispatch(newUserFailure(error))
        })

        // fetch(url, { method: "PUT" }, tempUser)
        // .then((response) => response.json())
        //     .then(data => {
        //         const users = data;
        //         console.log("NEW DATA:::::::::::::::",users);
        // dispatch(newUserSuccess(users))
        // }).catch(err => {
        //     const error = err.message;
        //     dispatch(newUserFailure(error))
        // })

        // method: 'POST',
        // headers: { 'Content-Type': 'application/json' },
        // body: JSON.stringify(user)

        // fetch(url, { method: "POST",headers: { 'Content-Type': 'application/json' },
        // body: JSON.stringify(tempUser) })

        //     .then((response) => response.json())
        //     .then(data => {
        //         const users = data;
        //         dispatch(getUserSuccess(tempUser))
        //     }).catch(err => {
        //         const error = err.message;
        //         dispatch(getUserFailure(error))
        //     })
    }
}