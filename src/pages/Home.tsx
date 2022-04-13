import { useNavigate } from "react-router-dom";

export const Home=()=>{
    let navigate = useNavigate();
    return (
        <h1 onClick={()=>{
            navigate('/login')
        }}>this is home page</h1>
    )
}