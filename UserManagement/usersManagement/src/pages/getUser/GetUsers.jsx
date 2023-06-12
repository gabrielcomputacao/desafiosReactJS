

import ButtonDelete from "../../components/buttons/ButtonDelete";
import ButtonInfoUser from "../../components/buttons/ButtonInfoUser";
import ButtonUpdate from "../../components/buttons/ButtonUpdate";
import GetUsersAllApi from "../../components/getUsersAllApi/GetUsersAllApi"
import "./getUsers.module.css"


export default function GetUsers(){

    const {getUsers, setGetUsers}  = GetUsersAllApi();
    

    return (
        <>
            <div>
                    <h1>Pegando todos os usuarios</h1>
                    <ul>
                        {
                            getUsers.map(
                                ( element) => (
                                    <li key={element.id}> 
                                        {element.name} - {element.email} - {element.gender} - {element.status}
                                        <ButtonInfoUser identificacao={element.id} /> <br />
                                        <ButtonDelete info={element.id} reloadData={setGetUsers}/> <br />
                                        <ButtonUpdate  id={element.id} />
                                        <br /><br />
                                    </li> 
                                )
                            )


                        }
                    </ul>
            </div>
        
        </>
    )

}