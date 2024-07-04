import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee speed={100} pauseOnHover={true}>
                <Link to={"/"} className="mr-7">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia minus praesentium libero molestias impedit.....</Link>
                <Link to={"/"} className="mr-7">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia minus praesentium libero molestias impedit.....</Link>
                <Link to={"/"} className="mr-7">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia minus praesentium libero molestias impedit.....</Link>
                <Link to={"/"} className="mr-7">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia minus praesentium libero molestias impedit.....</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;