import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import styles from "./styles.module.css";
import Navbar from "../../components/navbar/Navbar";

const AddStock = ({ setShow, size }) => {
	const [data, setData] = useState({
		
		name : "",
        productInfo : "",
        color : "",
        size : "",
		image : "",
        price : "",
	});
	const [errors, setErrors] = useState("");
	const [result, showResult] = useState(false);
	const { loading, error, dispatch } = useContext(AuthContext);
	const { user } = useContext(AuthContext);

	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};


	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "https://inventory-billing.herokuapp.com/api/products";
			const { data: setData } = await axios.post(url, data);
			alert("Product Added Successfully..!")
			navigate("/");
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
		<><Navbar/>
			{ user.username === "admin" ? (<div className={styles.signup_container}>
				<div className={styles.signup_form_container}>
					<div className={styles.left}>
						<h1>Welcome Admin</h1>
					</div>
					<div className={styles.right}>
						<form className={styles.form_container} onSubmit={handleSubmit}>
							<h1>Create Product</h1>
							<input type="text" placeholder="Product Name" name="name" onChange={handleChange} value={data.name} required className={styles.input} />
							<input type="text" placeholder="Product Info" name="productInfo" onChange={handleChange} value={data.productInfo} required className={styles.input} />
							<input type="text" placeholder="Product Color" name="color" onChange={handleChange} value={data.color} required className={styles.input} />
							<input type="decimal" placeholder="Product Size" name="size" onChange={handleChange} value={data.size} required className={styles.input} />
							<input type="text" placeholder="Image Link" name="image" onChange={handleChange} value={data.image} required className={styles.input} />
							<input type="decimal" placeholder="Product Price" name="price" onChange={handleChange} value={data.price} required className={styles.input} />
							<button disabled={loading} type="submit" className={styles.green_btn}> Add Product </button>
							{error && <div className={styles.error_msg}>{error}</div>}
						</form>
					</div>
				</div>
			</div>) :  ( <div className="d-flex justify-content-center m-5 h1">You are not authorized to Access this option</div> )
		}
		</>
	);
};

export default AddStock;