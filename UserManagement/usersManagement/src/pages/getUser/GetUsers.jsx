import ButtonInfoUser from "../../components/buttons/ButtonInfoUser";
import GetUsersAllApi from "../../components/getUsersAllApi/GetUsersAllApi"
import "./getUsers.module.css"


export default function GetUsers(){

    const usersAll = GetUsersAllApi();

    return (
        <>
            <div>
                    <h1>Pegando todos os usuarios</h1>
                    <ul>
                        {
                            usersAll.users.map(
                                ( element) => (
                                    <li key={element.id}> 
                                        {element.name} - {element.email} - {element.gender} - {element.status}
                                        <ButtonInfoUser identificacao={element.id} />
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