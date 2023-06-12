

import ButtonDelete from "../../components/buttons/ButtonDelete";
import ButtonInfoUser from "../../components/buttons/ButtonInfoUser";
import ButtonPost from "../../components/buttons/ButtonPost";
import ButtonUpdate from "../../components/buttons/ButtonUpdate";
import GetUsersAllApi from "../../components/getUsersAllApi/GetUsersAllApi"
import "./getUsers.module.css"
import ThemeContext from "../../context/ThemeGlobalContext";
import { useState } from "react";



export default function GetUsers(){

    const {getUsers, setGetUsers}  = GetUsersAllApi();
    const [color,setColor] = useState('#222');
    const corForte = "#FA8072";

    return (
        <>
            <ThemeContext.Provider value={{color , setColor, corForte}}>
                <div>
                    <h1>Pegando todos os usuarios</h1> <br />
                    <ButtonPost />
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
            </ThemeContext.Provider>
        </>
    )

}