import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


export default function User(){

    const params = useParams();
    const [user , setUser] = useState([])

    useEffect( ()=>{

        if(params.id != undefined){
            
            fetch(`https://gorest.co.in/public/v1/users/${params.id}`)
            .then( result => result.json())
            .then( info => setUser(info.data))
            .catch( e => console.log(e))

        }

    } , [params.id])

    return (
        <div>
            <h2>Usuario Unico</h2>
            <div>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.gender}</p>
                <p>{user.status}</p>
            </div>

        </div>
    )
}