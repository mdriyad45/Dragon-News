
import moment from "moment";
import logo from "../../../assets/logo.png"
import BreakingNews from "../../../Components/BreakingNews/BreakingNews";

const Header = () => {
    return (
        <div className="text-center p-10">
            <img className="mx-auto" src={logo} alt="" />
            <p className="text-xl">Journalism Without Fear or Favour</p>
            <p>{moment().format('dddd,MMMM,YYYY')}</p>
            <div className="text-start">
                <BreakingNews></BreakingNews>
            </div>
        </div>
    );
};

export default Header;