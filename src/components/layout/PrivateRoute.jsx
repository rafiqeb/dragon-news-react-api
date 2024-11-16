import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(user && user.email){
        return children;
    }
    else{
        return <Navigate to='/auth/login'></Navigate>
    } 
};

export default PrivateRoute;