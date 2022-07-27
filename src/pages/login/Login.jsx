import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

                                                                                                                                                                                                                                                                                        
const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (err) {
      console.log(err);
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };


  return (
    <div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container}>
						<h1>Login to Your Account</h1>
            <input  type="text" placeholder="username" id="username" onChange={handleChange} className={styles.input} />
            <input type="password" placeholder="password" id="password" onChange={handleChange} className={styles.input} />
						<Link to="/forgot-password" style={{ alignSelf: "flex-start" }}>
							{/* <p style={{ padding: "0 15px" }}>Forgot Password ?</p> */}
						</Link>
            <button disabled={loading} onClick={handleClick} className={styles.green_btn}> Login </button>
            {error && <span>{error.message}</span>}
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
    //  <div className="login">
    //   <div className="lContainer">
        // <input  type="text" placeholder="username" id="username" onChange={handleChange} className="lInput" />
        //  <input type="password" placeholder="password" id="password" onChange={handleChange} className="lInput" />
        //  <button disabled={loading} onClick={handleClick} className="lButton">
        //    Login
        //  </button>
    //     {error && <span>{error.message}</span>}
    //   </div>
    // </div>
//   );
// };   

export default Login;
