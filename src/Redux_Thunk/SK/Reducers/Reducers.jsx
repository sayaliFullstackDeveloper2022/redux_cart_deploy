import { GET_NOTES, DELETE_NOTE, UPDATE_NOTE, CREATE_NOTE } from '../Note_Constant';

const initials = {
    notes: [], note: null
}
// export default function Note_Creator(state = initials, action) {
export default function Note_Creator(state=initials , { type, payload }) {
    switch (type) {
        case GET_NOTES:
            console.log("REDUCER::::::::",payload)
            return {notes: payload };

        case CREATE_NOTE:
            console.log("REDUCERS:::::::::::::::::::::::", type, payload);
            console.log("REDUCERS:::::::::::::::::::::::", state);

            return {...state,notes:[payload,...state.notes]};
            // return { ...state,notes: [payload,...state] };

        // const tempId = action.id.payload;
        // return state.filter(item =>
        //     tempId.id !== item.tempItem.id)

        // case UPDATE_NOTE:
        //     {
        //         // const tempInc = action.id.payload;
        //         // return state.map(item => {
        //         //     if (tempInc.id === item.tempItem.id) {
        //         //         item.quantity += 1;
        //         //         (item.total += item.tempItem.price).toFixed(2);

        //         //     }
        //         //     return item;
        //         // })
        //     }
        // break;

        // case DELETE_NOTE:
        //     {
        //         // const tempDec = action.id.payload;
        //         // return state.map(item => {
        //         //     if (tempDec.id == item.tempItem.id && item.quantity > 1) {
        //         //         item.quantity -= 1;
        //         //         (item.total -= item.tempItem.price).toFixed(2);


        //         //     }
        //         //     return item;
        //         // })
        //     }
        // break;

        // case "UPDATEQUANTITY": 
        // {
        //     const tempId = action.id.payload;
        //     return state.filter(item =>{
        //         tempId.id === item.tempItem.id?item.quantity
        //     })

        // }
        default: return state;
    }
}