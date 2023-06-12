import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom"



export default function User(){

    const params = useParams();
    const [user , setUser] = useState([]);
    

    useEffect( ()=>{

        if(params.id !== undefined){
            
            fetch(`https://gorest.co.in/public/v1/users/${params.id}`,{
                headers:{
                    Authorization: "Bearer eca27a104c48ad93b32d5a056478cdd5f628176115d7b2e9b55578282caf9b80"
               }
            })
            .then( result => result.json())
            .then( info => setUser(info.data))
            .catch( e => console.log(e))

        }

    } , [params.id])

    return (
        <div>
            <h2>Usuario Unico</h2>
            <div>
                <p >{user.name}</p>
                <p>{user.email}</p>
                <p>{user.gender}</p>
                <p >{user.status}</p>
            </div>

            <br /><br />
            
        </div>
    )
}