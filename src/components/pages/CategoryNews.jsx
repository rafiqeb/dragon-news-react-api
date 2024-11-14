import { useLoaderData } from "react-router-dom";
import NewsCart from "./NewsCart";


const CategoryNews = () => {
    const {data} = useLoaderData();
    
    return (
        <div>
            <h2 className="text-lg font-bold mb-4 flex justify-center items-center">Dragon News Home</h2>
            <div>
                {
                    data.map(news => <NewsCart key={news._id} news={news}></NewsCart>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;