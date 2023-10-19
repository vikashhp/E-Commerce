import classes from "./Login.module.css";
import { useRef } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import CartContext from "../store/CartContext";
import { useContext } from "react";

const Login = () => {
  const inputEmailref = useRef();
  const inputPasswordref = useRef();
  const history = useHistory();
 const authCtx= useContext(CartContext)

  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = inputEmailref.current.value;
    const enteredPassword = inputPasswordref.current.value;

    setIsLoading(true);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCwZv808OhRcTulajFFTsrXP6Qn3bwN-uE",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errMessage = "Authentication Failed!";
            if (data && data.error && data.error.message) {
              errMessage = data.error.message;
            }
            throw new Error(errMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken)
        history.replace("/Display");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section className={classes.auth}>
      <h1>Login </h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={inputEmailref} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={inputPasswordref}
          />
        </div>
        <div className={classes.actions}>
          <button>Login</button>
          {isLoading && <p>Sending Request....</p>}

          <button type="button" className={classes.toggle}>
            Login with existing account
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
