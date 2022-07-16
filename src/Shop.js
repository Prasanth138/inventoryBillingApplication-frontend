import React from 'react';
import Shops from '../src/shops';
import Cart from './Cart';

export default function shop() {
    const shops=[
        {
            name : 'Special Item 1',
            price : 20,
            rating : 5,
            isInCart : false,
        },
        {
            name : 'Special Item 2',
            price : 50,
            rating : 5,
            isInCart : false,
        },
        {
            name : 'Special Item 3',
            price : 18,
            rating : 5,
            isInCart : false,
        },
        {
            name : 'Special Item 4',
            price : 58,
            rating : 5,
            isInCart : false,
        },
        {
            name : 'Special Item 5',
            price : 34,
            rating : 5,
            isInCart : false,
        },
        {
            name : 'Special Item 6',
            price : 28,
            rating : 5,
            isInCart : false,
        },
        {
            name : 'Special Item 7',
            price : 15,
            rating : 5,
            isInCart : false,
        },
        {
            name : 'Special Item 8',
            price : 18,
            rating : 5,
            isInCart : false,
        }
    ]
    
       
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
            <a className="navbar-brand" href="#!">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#!">All Products</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                            <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                        </ul>
                    </li>
                </ul>
                {
                    Cart((Cart, index)=>{
                        return (<Cart key={index} name={shops.cartItems.name} price={shops.cartItems.price} />)
                    })
                }
                
                <form className="d-flex">
                        <li className="nav-item dropdown">
                        <button className="btn btn-outline-dark"  href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi-cart-fill me-1"></i>Cart<span className="badge bg-dark text-white ms-1 rounded-pill">0</span></button>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#!">Special Item 1 - $20 <button className="btn btn-outline-dark m-0 py-0 px-1"><b>X</b></button></a></li>
                        </ul>
                    </li>
                </form>
            </div>
        </div>
    </nav>
    <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
                <h1 className="display-4 fw-bolder">Shop in style</h1>
                <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
            </div>
        </div>
    </header>
    <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {
                    shops.map((shops, index)=>{
                        return (<Shops key={index} name={shops.name} price={shops.price} rating={shops.rating} />)
                    })
                }
            </div>
        </div>
    </section>
    <footer className="py-5 bg-dark">
        <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2021</p></div>
    </footer>
    </div>
  )
}
