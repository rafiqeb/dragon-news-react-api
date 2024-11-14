import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className="text-lg font-bold mb-4 flex justify-center items-center">Login with</h2>
            <button className="px-8 py-2 rounded-lg border border-blue-300 flex items-center w-full justify-center gap-2"><FcGoogle /><span>Login with google</span></button>
            <button className="px-8 py-2 rounded-lg border border-blue-300 flex items-center w-full justify-center gap-2 mt-3"><FaGithub /><span>Login with github</span></button>
        </div>
    );
};

export default SocialLogin;