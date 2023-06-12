
import { Navigate, Route, Routes } from "react-router-dom"
import GetUsers from "../pages/getUser/GetUsers"
import User from "../pages/user/User"
import FormUser from "../pages/formUser/FormUser"


export const RoutesApp = () =>{

    return (
        <Routes>
            <Route  path="/" element={<GetUsers />} />
            <Route  path="*" element={ <Navigate  to="/" /> } />
            <Route  path="user/:id" element={ <User />}  />
            <Route  path="/formuser/:id?" element={<FormUser />} />
        </Routes>
    )

}