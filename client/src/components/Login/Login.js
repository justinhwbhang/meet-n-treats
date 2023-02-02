import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import { Link } from 'react-router-dom';

import Auth from "../../utils/auth.js";
import image from '../../assets/background.png';


function Login() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const [Login, { error, data }] = useMutation(LOGIN_USER);

  const handleInputChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await Login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
    }
  };
  return (     
      <div className="app-login_page">
          <div className='app-landing_page__container__header-title'>
                <h1>PAWSWIPE</h1>
            </div>
            <hr className="lin"></hr>
        <div className="app-login_page__container" style={{backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "70vh",
            width: "98vw",
            opacity: "0.9",

      }}> 
          <h1>Sign In</h1>
          <form onSubmit={handleFormSubmit}>
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
              />
              <input
                type="password"
                placeholder="********"
                name="password"
                value={formState.password}
                onChange={handleInputChange}
              />
              <button className="login" type="submit">Login</button>
            </form>
            <h3>
              Don't have an account?
              <Link className="text-dark" to="/register">Sign up</Link>
            </h3>
            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}


          {/* <div className="app-login_page__container__header">
            </div> */}
            </div>


        </div>
  );
}

export default Login;