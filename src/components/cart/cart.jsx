import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const { user } = useContext(AuthContext);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item._id !== id);
    setCart(arr);
    handlePrice();
  };

  const navigate = useNavigate()
  const handleRoute=(price)=>{
    if (user) {
      setOpenModal(true);
      navigate("/bill");
    } else {
      navigate("/login");
    }
    
  }
  const handlePrice = () => {
    let ans = 0;
    
    cart.map((item) => {(ans +=  parseInt(item.price)); 
    });
    
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item._id}>
          <div className="cart_img">
            <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
            <p>{item.name}</p>
          </div>
          <div>
           
          </div>
          <div>
            <span>Rs.{item.price}</span>
            <button onClick={() => handleRemove(item._id)}>Remove</button>
            
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>Rs - {price}</span>    
        <button className="btn btn-danger" style={{ marginTop: 5 }} onClick={() => handleRoute(price)}>Checkout</button>     
      </div>
      
      
    </article>

  );
};





export default Cart;

