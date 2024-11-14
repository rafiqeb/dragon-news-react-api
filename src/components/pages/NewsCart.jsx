

const NewsCart = ({news}) => {
    console.log(news)
    const {title, image_url, details} = news;
    return (
        <div>
            <h2 className="text-2xl font-bold p-4">{title}</h2>
            <img className="p-4" src={image_url} alt="" />
            <p className="text-lg text-gray-600 p-4">{details}</p>
        </div>
    );
};

export default NewsCart;