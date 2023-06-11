import { useEffect, useState } from "react";


export default function GetUsersAllApi(){
    
    const [users , setUsers] = useState([]);

    useEffect(()=>{

        fetch('https://gorest.co.in/public/v1/users' , {
           headers:{
                Authorization: "Bearer eca27a104c48ad93b32d5a056478cdd5f628176115d7b2e9b55578282caf9b80"
           }
        })
        .then( result => result.json())
        .then( (dados) =>setUsers(dados.data) )
        .catch( e => console.log(e))

    } , []);

    return { users };

}