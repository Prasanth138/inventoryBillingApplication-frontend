import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import styles from "./styles.module.css";

const Signup = () => {
	const [data, setData] = useState({
		
		username: "",
		email: "",
		password: "",
		isAdmin : false
	});
	const [errors, setErrors] = useState("");
	const [result, showResult] = useState(false);
	const { loading, error, dispatch } = useContext(AuthContext);

	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	// const handleClick = async (e) => {
	// 	e.preventDefault();
	// 	dispatch({ type: "LOGIN_START" });
	// 	try {
	// 	  const res = await axios.post("/auth/register", setData);
	// 	  dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
	// 	  navigate("/")
	// 	} catch (err) {
	// 	  dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
	// 	}
	//   };

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:5000/api/auth/register";
			const { data: setData } = await axios.post(url, data);
			alert("User Created Successfully..!")
			navigate("/login");
			console.log(data.message);
			
		} catch (errors) {
			if (
				errors.response &&
				errors.response.status >= 400 &&
				errors.response.status <= 500
			) {
				setErrors(errors.response.data.message);
			}
		}
	};

	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sign in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input type="text" placeholder="User Name" name="username" onChange={handleChange} value={data.username} required className={styles.input} />
						<input type="email" placeholder="Email" name="email" onChange={handleChange} value={data.email} required className={styles.input} />
						<input type="password" placeholder="Password" name="password" onChange={handleChange} value={data.password} required className={styles.input} />
						{error && <div className={styles.error_msg}>{error}</div>}
						<button disabled={loading} type="submit" className={styles.green_btn}> Sign Up </button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;