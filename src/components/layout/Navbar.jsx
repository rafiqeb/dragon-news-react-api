import { Link, NavLink } from "react-router-dom";
import user from '../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
    const {user, logout} = useContext(AuthContext)

    return (
        <div className="flex justify-between items-center mb-6">
            <div className="ml-20">{user && user.email}</div>
            <div className="flex gap-6 ml-14">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='about'>About</NavLink>
                <NavLink to='career'>Career</NavLink>
            </div>
            <div className="flex gap-6 items-center">
                <img src={user} alt="" />
                <div>
                {
                    user && user?.email ? (<button onClick={logout} className="bg-green-900 px-6 py-2 text-white text-xl font-bold">Logout</button>) : (<Link to='/auth/login' className="bg-green-900 px-6 py-2 text-white text-xl font-bold">Login</Link>)
                }
                
                </div>
            </div>
        </div>
    );
};

export default Navbar;