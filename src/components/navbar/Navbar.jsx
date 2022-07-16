import {
  faHouse,
  faCartShopping,
  faFileLines,
  faSquarePlus,
  faArrowRightFromBracket,
  faArrowRightToBracket,faUser
} from "@fortawesome/free-solid-svg-icons";
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Navbars = ({ setShow, size }) => {
  const { user,dispatch} = useContext(AuthContext);
    
  const handleClick = async (e) => {
      e.preventDefault();
      dispatch({ type: "LOGOUT" });
    
    };

  return (


    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Nav.Link onClick={() => setShow(true)}>Inventory Billing</Nav.Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <Nav.Link href="/"><FontAwesomeIcon icon={faHouse} /> Home</Nav.Link>
            <Nav.Link href="/bill"><FontAwesomeIcon icon={faFileLines} /> Bill</Nav.Link>
            <Nav.Link href="/invoice"><FontAwesomeIcon icon={faFileLines} /> Invoice</Nav.Link>
            <Nav.Link href="/addStock"><FontAwesomeIcon icon={faSquarePlus} /> Add Stock</Nav.Link>
            <Nav.Link onClick={() => setShow(false)}><FontAwesomeIcon icon={faCartShopping} /> Cart<Badge bg="secondary">{size}</Badge></Nav.Link>
          </Nav>
          <Form className="d-flex">
          {user ? (
                  <div className="navItems">
                  <span>{user.username}</span>
                  <button className="navButton" onClick={handleClick}><FontAwesomeIcon icon={faArrowRightFromBracket} /> Log out</button>
                  </div>) : (
                  <div className="navItems">
                  <button className="navButton"><Link to="/signup" style={{ color: "inherit", textDecoration: "none" }}><FontAwesomeIcon icon={faUser} /> Register</Link></button>
                  <button className="navButton"><Link to="/login" style={{ color: "inherit", textDecoration: "none" }}>
                  <span className="logo"><FontAwesomeIcon icon={faArrowRightToBracket} />  Login</span>
                  </Link></button>
                  </div>
                 )}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
};

export default Navbars;





