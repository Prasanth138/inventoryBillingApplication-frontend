import React from 'react';

export default function shops({item, handleClick}) {
    const { name, price,image } = item;
   

  return (
    <div className="col">
                    <div className="card h-75">
                        <img className="card-img-top h-75 p-2" src={image} alt="..." />
                        <div className="card-body m-0 pt-2">
                            <div className="text-center">
                                <h5 className="fw-bolder">{name}</h5>
                                <div className="d-flex justify-content-center small text-warning mb-2">
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                </div>
                                <span className="text-center">Rs.{price}</span>
                            </div>
                        </div>
                        <div className="card-footer p-3 pt-0 border-top-0 bg-transparent">
                            <div className="text-center"><button className="btn btn-outline-dark mt-auto" href="#" onClick={() => handleClick(item)}>Add to cart</button></div>
                        </div>
                    </div>
                </div>
                
  )
}
