import { useLoaderData, useNavigate } from "react-router-dom";
import Header from "../layout/Header";
import RightNav from "../mainSection/RightNav";

const NewsDetails = () => {
    const navigate = useNavigate()

    const data = useLoaderData()
    const news = data.data[0]
    const { title, image_url, details, _id } = news;

    return (
        <div>
            <header><Header></Header></header>
            <main className="max-w-7xl mx-auto grid grid-cols-12 gap-3">
                <section className="col-span-9">
                    <h2 className="text-xl font-bold">Dragon news</h2>
                    <div>
                        <h2 className="text-2xl font-bold p-4">{title}</h2>
                        <img className="p-4" src={image_url} alt="" />
                        <p className="text-lg text-gray-600 p-4">{details}</p>
                        <button onClick={() => navigate('/')} className="btn btn-primary">Back to home</button>
                    </div>
                </section>
                <aside className="col-span-3"><RightNav></RightNav></aside>
            </main>
        </div>
    );
};

export default NewsDetails;