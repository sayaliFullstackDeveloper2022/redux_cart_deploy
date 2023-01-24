import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCustomers } from "../actions/Actions";


const Home=()=>{
const dispatch= useDispatch();
    useEffect(()=>dispatch(fetchCustomers())  ,[])
    return(<>
    <div className="my-5  m-auto container text-center">
    <h1>Welocome To Customer Portal</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores officia alias voluptate! Fugit, iste blanditiis odit eaque quibusdam dicta ab. Repellat quos unde velit expedita sit laboriosam, eaque perferendis voluptas?</p>
    </div>
    </>)
}
export default Home;