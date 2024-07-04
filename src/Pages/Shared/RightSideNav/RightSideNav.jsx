import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
  return (
    <div>
      <h2 className="text-3xl p-4">Login With</h2>
      <div className="space-y-3 p-4">
        <button className="btn btn-outline w-full bg-blue-400 text-lg">
          <FaGoogle></FaGoogle>
          Login with Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>
          Login with Github
        </button>
      </div>
      <div className="p-4">
        <h2 className="text-3xl mb-3">Find Us On</h2>
        <div>
            <Link className="flex gap-3 items-center border-2 rounded-t-lg p-3 text-3xl font-medium hover:bg-slate-700 hover:text-white">
                <FaFacebook></FaFacebook>
                <span>Facebook</span>
            </Link>
            <Link className="flex gap-3 items-center border-x p-3 text-3xl font-medium hover:bg-slate-700 hover:text-white">
                <FaTwitter></FaTwitter>
                <span>Twitter</span>
            </Link>
            <Link className="flex gap-3 items-center border-2 rounded-b-lg  p-3 text-3xl font-medium hover:bg-slate-700 hover:text-white">
                <FaInstagram></FaInstagram>
                <span>Instagram</span>
            </Link>
        </div>
      </div>

      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl">Q Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
RightSideNav;
