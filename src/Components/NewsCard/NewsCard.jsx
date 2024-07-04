import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; 

const NewsCard = ({news}) => {
    const {title, image_url, details, _id} = news;
    return (
        <div className="card bg-base-100 shadow-xl mb-16">
            <figure><img src={image_url} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>
                    {
                        details.length > 200 
                        ? <p>{details.slice(0,200)} <Link
                        to={`/newsDetails/${_id}`}
                        className="text-blue-600 font-bold">Read more....</Link></p>
                        : <p><details></details></p>
                    }
                </p>
            </div>
        </div>
    );
};

export default NewsCard;

NewsCard.propTypes = {
    news : PropTypes.node
}