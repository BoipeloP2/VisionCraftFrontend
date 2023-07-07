import React from 'react'
import ReactStars from "react-rating-stars-component";
import {Link, useLocation} from "react-router-dom";
import prodcompare from "../images/prodcompare.svg"
import wish from "../images/wish.svg"
import wishlist from "../images/wishlist.svg"
import watch from "../images/watch.jpg"
import watch2 from "../images/watch-01.jpg"
import addcart from "../images/add-cart.svg"
import view from "../images/view.svg"
import glasses4 from "../images/glasses/glass-4.webp"
import glasses6 from "../images/glasses/glass-6.webp"
import glasses7 from "../images/glasses/glass-7.jpg"
import glasses8 from "../images/glasses/glass-8.jpeg"




const ProductCard = (props) => {
    const {grid } = props;
    let location = useLocation();
    
  return (
    <>
    <div className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link to="/product/:id" className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
                    <button className='border-0 bg-transparent'>
                <img src={wish} alt="wishlist" />
                </button>
                </div>
           <div className="product-image">
               <img src={glasses6} className="img-fluid" alt="product image" />
               <img src={glasses6} className="img-fluid" alt="product image" />
           </div>
           
            <div className="product-details">
                <h6 className="brand">Glasses</h6>
                <h5 className="product-title">Glasse for kids with vision dissability</h5>
                <ReactStars count={5} size={24} value={3} edit={false} activeColor="#ffd700" />
                <p className={`description ${grid===12 ? "d-block" : "d-none"}`} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cumque,. Temporibus pariatur adipisci cupiditate,</p>

                <p className="price">R500</p>
            </div>
            <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                    <button className='border-0 bg-transparent'><img src={view} alt="" /></button>
                    <button className='border-0 bg-transparent'><img src={prodcompare} alt="" /></button>
                    <button className='border-0 bg-transparent'><img src={addcart} alt="" /></button>
                    {/* <Link><img src="images/add-cart.svg" alt="" /></Link> */}
                </div>
            </div>
        </Link>
    </div>
    <div className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link to="/product/:id" className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
        <button className='border-0 bg-transparent'>
                <img src={wish} alt="wishlist" />
                </button>
                </div>
           <div className="product-image">
               <img src={glasses7} className="img-fluid" alt="product image" />
               <img src={glasses7} className="img-fluid" alt="product image" />
           </div>
           
            <div className="product-details">
                <h6 className="brand">Glasses</h6>
                <h5 className="product-title">Glasse for kids with vision dissability</h5>
                <ReactStars count={5} size={24} value={3} edit={false} activeColor="#ffd700" />
                <p className={`description ${grid===12 ? "d-block" : "d-none"}`} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cumque,. Temporibus pariatur adipisci cupiditate,</p>

                <p className="price">R500</p>
            </div>
            <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                <button className='border-0 bg-transparent'><img src={view} alt="" /></button>
                    <button className='border-0 bg-transparent'><img src={prodcompare} alt="" /></button>
                    <button className='border-0 bg-transparent'><img src={addcart} alt="" /></button>
                    {/* <Link><img src="images/add-cart.svg" alt="" /></Link> */}
                </div>
            </div>
        </Link>
    </div>
    <div className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link to="/product/:id" className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
        <button className='border-0 bg-transparent'>
                <img src={wish} alt="wishlist" />
                </button>
                </div>
           <div className="product-image">
               <img src={glasses8} className="img-fluid" alt="product image" />
               <img src={glasses8} className="img-fluid" alt="product image" />
           </div>
           
            <div className="product-details">
                <h6 className="brand">Glasses</h6>
                <h5 className="product-title">Glasse for kids with vision dissability</h5>
                <ReactStars count={5} size={24} value={3} edit={false} activeColor="#ffd700" />
                <p className={`description ${grid===12 ? "d-block" : "d-none"}`} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cumque,. Temporibus pariatur adipisci cupiditate,</p>

                <p className="price">R500</p>
            </div>
            <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                <button className='border-0 bg-transparent'><img src={view} alt="" /></button>
                    <button className='border-0 bg-transparent'><img src={prodcompare} alt="" /></button>
                    <button className='border-0 bg-transparent'><img src={addcart} alt="" /></button>
                    {/* <Link><img src="images/add-cart.svg" alt="" /></Link> */}
                </div>
            </div>
        </Link>
    </div>
   

   
    
    </>
  )
}

export default ProductCard