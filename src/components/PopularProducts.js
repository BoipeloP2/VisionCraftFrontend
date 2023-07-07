import React from 'react'
import ReactStars from "react-rating-stars-component";
import {Link} from "react-router-dom";

function PopularProducts() {
  return (
    <>
    <div className="col-3">
        <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
                    <button className='border-0 bg-transparent'>
                <img src="images/wish.svg" alt="wishlist" />
                </button>
                </div>
            <div className="product-image">
                <img src="/images/watch.jpg" className='img-fluid' alt="product image" />
                <img src="/images/watch-01.jpg" className='img-fluid' alt="product image" />
               
            </div>
            <div className="product-details">
                <h6 className="brand">Glasses</h6>
                <h5 className="product-title">Glasse for kids with vision dissability</h5>
                <ReactStars count={5} size={24} value={3} edit={false} activeColor="#ffd700" />
                <p className="price">R500</p>
            </div>
            <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                    <button className='border-0 bg-transparent'><img src="images/view.svg" alt="" /></button>
                    <button className='border-0 bg-transparent'><img src="images/prodcompare.svg" alt="" /></button>
                    <button className='border-0 bg-transparent'><img src="images/add-cart.svg" alt="" /></button>
                    {/* <Link><img src="images/add-cart.svg" alt="" /></Link> */}
                </div>
            </div>
        </Link>
    </div>
    
    </>
  )
}

export default PopularProducts