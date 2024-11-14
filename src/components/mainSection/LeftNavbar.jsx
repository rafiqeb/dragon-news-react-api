import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftNavbar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => setCategories(data.data.news_category))
    }, [])
    
    return (
        <div>
            <h2 className="text-lg font-semibold mb-4 flex justify-center items-center">All category</h2>
            <div className="flex flex-col justify-center items-center gap-3">
                {
                    categories.map((category) => (<NavLink to={`/category/${category.category_id}`}
                        className={"px-3 py-2 rounded-lg w-48 font-semibold flex justify-center items-center"}
                    key={category.category_id}>
                        {category.category_name}</NavLink>))
                }
            </div>
        </div>
    );
};

export default LeftNavbar;