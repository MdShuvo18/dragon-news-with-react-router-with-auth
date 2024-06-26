import { Link } from "react-router-dom";


const NewsSection = ({ news }) => {
    const { title, thumbnail_url,image_url, details,_id } = news
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {
                    details.length > 200
                        ? <p>{details.slice(0, 200)} <Link 
                        to={`/news/${_id}`}
                        className="text-blue-700 font-semibold">Read more...
                        </Link></p>
                        : <p>{details}</p>
                }

            </div>
        </div>
    );
};

export default NewsSection;