import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";


export default function FormUser(){
    const navigate = useNavigate();
    const [user,setUser] = useState({ name: '' , email: '', gender: '', status: '' });
    const params = useParams();

    function handleOnchange(e){
        setUser( prev => {
                return { ...prev,
                [e.target.id]: e.target.value}
            }
            );
            console.log(e.target.value); 
    }

    function handleSubmitUser (e){
            e.preventDefault();
            console.log(user)
            if(params.id !== undefined){

                fetch(`https://gorest.co.in/public/v1/users/${params.id}`,{
                    method: "PATCH",
                    headers:{
                        Authorization: "Bearer eca27a104c48ad93b32d5a056478cdd5f628176115d7b2e9b55578282caf9b80",
                        
                   },
                   mode: 'cors',
                   body: JSON.stringify(user),
                })
                .then( result => {
                    console.log(result);
                    navigate("/");
                }) 
                .catch(e => console.log(e))
            }else{
                fetch(`https://gorest.co.in/public/v1/users`, {
                    method: "POST",
                    headers:{
                        Authorization: "Bearer eca27a104c48ad93b32d5a056478cdd5f628176115d7b2e9b55578282caf9b80",
                        'Content-Type': 'application/json'
                   },
                   mode: 'cors',
                   body: JSON.stringify(user),
                })
                .then( result => {
                    console.log(result);
                    navigate("/");
                }) 
                .catch(e => console.log(e))
            }
        

        

    }


    return (
        <div>
            <h3>Form User</h3>

            {/* 
            
                "name": string, 
                "email": string, 
                "gender": string(male, female), 
                "status": string(active, inactive) */}

            <form  onSubmit={ (e) => handleSubmitUser(e)}>
                <input type="text" onChange={ (e)=> handleOnchange(e)} id="name" value={user.name} /> <br />
                <input type="text" onChange={ (e)=> handleOnchange(e)} id="email" value={user.email} /> <br />
                <input type="text" onChange={ (e)=> handleOnchange(e)} id="gender" value={user.gender} /> <br />
                <input type="text" onChange={ (e)=> handleOnchange(e)} id="status" value={user.status} /> <br />

                <button type="submit" >Enviar</button>
               
            </form>
        </div>
    )
}