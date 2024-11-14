import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="flex gap-3 items-center">
            <p className="bg-green-900 text-white px-4 py-2 text-xl font-bold">Latest</p>
            <Marquee pauseOnHover={true} className="space-x-10">
                <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, doloremque repudiandae? Beatae architecto.</Link>
                <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, doloremque repudiandae? Beatae architecto.</Link>
                <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, doloremque repudiandae? Beatae architecto.</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;