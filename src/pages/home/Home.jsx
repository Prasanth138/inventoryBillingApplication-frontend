import React, { useContext,useEffect, useState} from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import Cart from "../../components/cart/cart";
import { AuthContext } from "../../context/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./home.css";

const Home = () => {
   
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(true);
  const { user} = useContext(AuthContext);
 

  const handleClick = (item) => {
     if (cart.indexOf(item) !== -1) return;
    // cart.push(item);
    setCart([...cart, item]);
  };
  useEffect(() => {
    toast.success(`Welcome ${user.username}`);
  }, []);

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
    
  };
  return (
    <div>
      <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            limit={1}
            />
      <Navbar setShow={setShow} size={cart.length} />
      <Header/>
      {show ? (
        <PropertyList handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
  
    </div>
  );
};

export default Home;


