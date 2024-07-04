import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";

const Register = () => {
    const {createUser} = useContext(AuthContext);
    
    const handleRegisterForm = (e)=>{
        e.preventDefault();


        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const email = form.get('email');
        const password = form.get('password');
        const photoUrl = form.get('photo');

        createUser(email, password)
        .then(result =>{
            e.target.reset();
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error);
        })
    }
  return (
    <div className="h-full">
      <div className="py-5">
        <Navbar></Navbar>
      </div>
      <div>
        <h2 className="text-center text-2xl my-10">Please Register</h2>
        <form onSubmit={handleRegisterForm} className="md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter photo Url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="Password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <Link className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="text-center mt-5">
          Already have an account?
          <Link
            className="text-blue-500 ml-2 hover:text-blue-800 font-bold"
            to={"/login"}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
