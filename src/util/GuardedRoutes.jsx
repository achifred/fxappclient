import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "./tokenUtil";
function GuardedRoutes() {
    const auth = getToken()
    return auth!=null?<Outlet/>: <Navigate to="/login"/>
}

export default GuardedRoutes