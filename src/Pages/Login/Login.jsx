import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Login = () => {
    const handleLoginForm= (e)=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        
        console.log(email, password)

    }
  return (
    <div className="h-screen">
        <div className="py-5">
        <Navbar></Navbar>
        </div>
      <div>
        <h2 className="text-center text-2xl my-10">Please Login</h2>
        <form onSubmit={handleLoginForm} className="md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <Link  className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
    <p className="text-center mt-5">Don&#39;t have an account? <Link className="text-blue-500 ml-2 hover:text-blue-800 font-bold" to={'/register'}>Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
