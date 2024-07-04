import { Link, NavLink } from "react-router-dom";
import profileLogo from "../../../assets/user.png"

const Navbar = () => {
  const Links = (
    <>
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>
        <NavLink to={'/'}>About</NavLink>
      </li>
      <li>
        <NavLink to={'/'}>Career</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-slate-300 mt-3 rounded-md">
      <div className="navbar-start">
        <div className="dropdown">
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 "
          >
            {Links}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6">
            {Links}
        </ul>
      </div>
      <div className="navbar-end space-x-3 mr-5">
        <div className="w-7">
            <img src={profileLogo} className="rounded-full" alt="" />
        </div>
        <Link to={'/login'} className="bg-red-600 hover:bg-red-700 w-16 text-white font-semibold text-center rounded-sm transition-all">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
