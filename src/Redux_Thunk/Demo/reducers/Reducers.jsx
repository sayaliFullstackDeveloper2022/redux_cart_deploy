
const initialState = { users: [], loading: false, error: null }

// const Reducers = (state = initialState, {type,payload}) => {
const Reducers = (state = initialState, action) => {
    // console.log("Reducers:::::", action.payload);
    switch (action.type) {
        case "GET_USER_REQUEST":
            // console.log("USER Req");
            return { ...state, loading: true }
        case "GET_USER_SUCCESS":
            // const x={ ...state, loading: false, users:action.payload}
            // console.log("AFTERUPDATION:",x);

            return { ...state, loading: false, users:action.payload}
        case "GET_USER_FAILURE":
            return { ...state, loading: false, error: action.payload }
            case "NEW_USER_REQUEST":
            // console.log("USER Req");
            return { ...state, loading: true }
        case "NEW_USER_SUCCESS":
            const x={ ...state, loading: false,  users: [action.payload,...state.users,] }
            console.log("AFTERUPDATION:",x);

            return { ...state, loading: false,  users: [...state.users, action.payload],}
        case "NEW_USER_FAILURE":
            return { ...state, loading: false, error: action.payload }
        default:
            return state;
    }

}
export default Reducers;