import { useNavigate } from "react-router-dom"



export default function ButtonPost(){

    const navigate = useNavigate();
    
    function handlePostCadastro(to){
        navigate(to)
    }

    return (
        <div>
            <button  onClick={ () => handlePostCadastro("/formuser")}>Cadastrar</button>
        </div>
    )
}