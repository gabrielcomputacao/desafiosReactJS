import { useNavigate } from "react-router-dom"




// eslint-disable-next-line react/prop-types
export default function ButtonInfoUser( {identificacao} ){

    const navigate = useNavigate();

    function handleNavigatetUser(to){

       navigate(to)
    }


    return (
        <div>
            <button onClick={ ()=> handleNavigatetUser(`/user/${identificacao}`)}> Informações {identificacao}  </button>
        </div>
    )

}