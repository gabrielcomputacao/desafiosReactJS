import { useNavigate } from "react-router-dom"


// eslint-disable-next-line react/prop-types
export default function ButtonUpdate({id}){

    const navigate = useNavigate();

    function handleNavigateUpdate(to){
        navigate(to)
    }

    return (
        <div>
            <button onClick={()=> handleNavigateUpdate(`/formuser/${id}`)}>Change User</button>
        </div>
    )

}