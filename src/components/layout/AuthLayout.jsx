import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


const AuthLayout = () => {
    return (
        <div className="mt-4">
            <div><Navbar></Navbar></div>
            <div><Outlet></Outlet></div>
        </div>
    );
};

export default AuthLayout;