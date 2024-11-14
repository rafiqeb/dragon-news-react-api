import { NavLink } from "react-router-dom";
import user from '../../assets/user.png'

const Navbar = () => {
    return (
        <div className="flex justify-between items-center mb-6">
            <div className="ml-20"></div>
            <div className="flex gap-6 ml-14">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='about'>About</NavLink>
                <NavLink to='career'>Career</NavLink>
            </div>
            <div className="flex gap-6 items-center">
                <img src={user} alt="" />
                <button className="bg-green-900 px-6 py-2 text-white text-xl font-bold">Login</button>
            </div>
        </div>
    );
};

export default Navbar;