import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const Register = () => {
  const [error, setError] = useState("");
  const { signInGoogle, createUser } = use(AuthContext);
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log(name, email, photo, password);

    const passPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passPattern.test(password)) {
      setError(
        "Password Must have an Uppercase, a Lowercase letter and  Length must be at least 6 character"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user); 
        navigate('/')

      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleGoogle=()=>{
    signInGoogle()
    .then((result) => {
        console.log(result.user); 
        navigate('/')

      })
      .catch((err) => {
        setError(err.message);
      });
  }
  return (
    <div className="flex items-center justify-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                className="input"
                placeholder="Name"
                name="name"
              />
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                name="email"
              />
              <label className="label">PhotoUrl</label>
              <input
                type="text"
                className="input"
                placeholder="Url"
                name="photo"
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                name="password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
          </form>
          <p>
            Already have an account!
            <Link to="/login" className="text-red-400 font-semibold">
              Login
            </Link>
          </p>
          <button onClick={handleGoogle} className="btn bg-blue-200 w-full">Login with Google</button>
          <p className="text-red-500 font-semibold">{error}</p>
        </div>
      </div>
    </div>
  );
};

export default Register;


