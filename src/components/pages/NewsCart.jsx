import { Link } from "react-router-dom";


const NewsCart = ({news}) => {
    
    const {title, image_url, details, _id} = news;
    
    return (
        <div>
            <h2 className="text-2xl font-bold p-4">{title}</h2>
            <img className="p-4" src={image_url} alt="" />
            <p className="text-lg text-gray-600 p-4">{details.slice(0, 150)}...{""}
                <Link to={`/news/${_id}`} className="font-bold text-red-500">Read more</Link>
            </p>
        </div>
    );
};

export default NewsCart;