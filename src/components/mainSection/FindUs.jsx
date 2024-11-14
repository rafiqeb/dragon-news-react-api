import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const FindUs = () => {
    return (
        <div className="mt-6">
            <h2 className="text-lg font-bold mb-2 flex justify-center items-center">Find us</h2>
            <button className="btn w-full flex items-center gap-3"><FaFacebookF /><span>Facebook</span></button>
            <button className="btn w-full flex items-center gap-3"><FaTwitter /><span>Twitter</span></button>
            <button className="btn w-full flex items-center gap-3"><FaInstagram /><span>Instagram</span></button>
        </div>
    );
};

export default FindUs;