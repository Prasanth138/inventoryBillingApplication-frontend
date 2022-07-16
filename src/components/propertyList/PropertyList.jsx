import React, { useState} from "react";
import useFetch from "../../hooks/useFetch";
import Shops from './shops';
import "./propertyList.css";

const PropertyList = ({handleClick}) => {
    const { data, loading, error } = useFetch("/products");
  return (
    <>
    <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {
                    data.map((item, index)=>{
                        return (<Shops key={index} item={item} handleClick={handleClick} />)
                    })
                }
            </div>
        </div>
    </section>
    <footer className="py-5 bg-dark">
    <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2022</p></div>
    </footer>
    </>
  );
};

export default PropertyList;
