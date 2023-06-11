
import { Navigate, Route, Routes } from "react-router-dom"
import GetUsers from "../pages/getUser/GetUsers"
import User from "../pages/user/User"


export const RoutesApp = () =>{

    return (
        <Routes>
            <Route  path="/home" element={<GetUsers />} />
            <Route  path="*" element={ <Navigate  to="/home" /> } />
            <Route  path="user/:id" element={ <User />}  />
        </Routes>
    )

}