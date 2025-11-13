import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";




const Login = () => {
  const { signInGoogle, signInwithEmail } = use(AuthContext);
  const [error, setError] = useState('')
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    signInwithEmail(email, password)
      .then((result) => {
       
        console.log(result.user);
        e.target.reset();
        navigate(location.state || "/");
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  };

  const handleGoogle = () => {
    signInGoogle()
      .then((result) => {
        console.log(result.user);

        navigate(location.state || "/");
      })
      .catch((err) => {
       setError(err.message);
        
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              name="email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              name="password"
            />
          </div>
          <div className="text-right">
            <button
              type="button"
              className="text-sm text-blue-500 hover:underline"
            >
              Forget Password?
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-300 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
        <p className="text-red-500 font-semibold text-center">{error}</p>
        <div className="flex items-center my-4">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-2 text-gray-500">OR</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <button
          onClick={handleGoogle}
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition mb-4"
        >
          Login with Google
        </button>
        <p className="text-center text-gray-600">
          Don't have an account?{" "}
          <Link to={'/register'} className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    
    </div>
  );
};

export default Login;
