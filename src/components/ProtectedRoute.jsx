import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute=({children})=>{
    const {user} = useAuth();
   return user?children: <Navigate to="/pages/Auth/Login.jsx"/>
       
    
}
export default ProtectedRoute;