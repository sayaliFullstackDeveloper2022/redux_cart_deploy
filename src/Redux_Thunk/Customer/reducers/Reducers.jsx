
const initialState = { customers: [], loading: false, error: null, customer: null }

const Reducers = (state = initialState, action) => {
    // console.log("ReducersSSSSSSSSSSSSSSSSSSSSSSSSSS:::::", action.payload,"++++++++++++",action.type);
    switch (action.type) {
        case "CUSTOMER_REQUEST":
            console.log("in reducer customer request");
            return { ...state, loading: true }
        case "FETCH_SUCCES":
            console.log("in reducer customer success");
            return { ...state, loading: false, customers: action.payload }
        case "CUSTOMER_FAILURE":
            // alert(action.payload)
            return { ...state, loading: false, error: action.payload }
        case "NEW_CUSTOMER_SUCCESS":
        case "DELETE_CUSTOMER_SUCCESS":
        case "UPDATE_CUSTOMER_SUCCESS":
            return { ...state, loading: false }
        // case "SINGLE_CUSTOMER_SUCCESS":
        //     return { ...state, loading: false, customer: action.payload }
        default:
            return state;
    }

}
export default Reducers;