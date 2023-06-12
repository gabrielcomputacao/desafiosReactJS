import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import ThemeContext from "../../context/ThemeGlobalContext";


// eslint-disable-next-line react/prop-types
export default function ButtonUpdate({id}){

    const navigate = useNavigate();
    const {color } = useContext(ThemeContext);

    function handleNavigateUpdate(to){
        navigate(to)
    }

    return (
        <div style={{backgroundColor: color}} >
            <button onClick={()=> handleNavigateUpdate(`/formuser/${id}`)}>Change User</button>
        </div>
    )

}