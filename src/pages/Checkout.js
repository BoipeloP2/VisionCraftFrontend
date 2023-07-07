import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import glasses from "../images/glasses/glass-6.webp";
import {IoIosArrowBack} from "react-icons/io"
import {MdOutlineArrowBackIos} from "react-icons/md"
import Container from '../components/Container'

import {Link} from "react-router-dom"

const Checkout = () => {
  return (
    <>
        <BreadCrumb title="Cart"/>


            <Container class1="checkout-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-7">
                          <div className="checkout-left-data">
                            <h3 className='website-name pt-2'>
                                Vision Craft
                            </h3>
                            <nav className='pb-4' style={{"--bs-breadcrumb-divider": ">"}} aria-label='breadcrumb'>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item ">
                                        <Link className='text-dark' to="/cart">Cart</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">Information</li>
                                    <li className="breadcrumb-item active" aria-current="page">Shipping</li>
                                    <li className="breadcrumb-item ">
                                        <Link className='text-dark' to="/checkout">Checkout</Link>
                                    </li>
                                </ol>
                            </nav>
                            <h4>Shipping Address</h4>
                            <form action="" className='d-flex flex-wrap gap-15 justify-content-between mb-3 pb-2'>
                                <div className='w-100'><select className="form-control form-select" id="">
                                        <option value="" selected disabled> Select Country</option>
                                    </select></div>
                                <div className='flex-grow-1'><input type="text" placeholder='First Name' className="form-control" /></div>
                                <div className='flex-grow-1'><input type="text" placeholder='Last Name' className="form-control" /></div>
                                <div className='w-100'><input type="text" placeholder='Address' className="form-control width" /></div>
                                <div className='w-100'><input type="text" placeholder='Apartment, Suite , etc' className="form-control" /></div>
                                <div className='flex-grow-1'><input type="text" placeholder='City' className="form-control" /></div>
                                <div className='flex-grow-1'><select className="form-control form-select" id=""><option value="" selected disabled> Select State</option></select></div>
                                <div className='flex-grow-1'><input type="text" placeholder='Zip Code' className="form-control" /></div>
                                <div className="w-100">
                                    <div className="d-flex justify-content-between align-items-center pt-4">
                                        <Link to="/cart" className='text-dark'><MdOutlineArrowBackIos/>Return to Cart</Link>
                                        <Link to="/checkout" className='button'>Continue to Shipping</Link>
                                    </div>
                                </div>


                                
                            </form>
                          </div>
                        </div>
                        <div className="col-5">
                            <div className='border-bottom py-4'>
                                <div className="d-flex gap-10 align mb-2 align-items-center">
                                <div className="w-75 d-flex">
                                    <div className="w-25 position-relative">
                                        <span style={{top:"-10px", right:"2px"}} 
                                        className='badge bg-secondary text-white rounded-circle p-2 position-absolute'>1</span>
                                    <img className="img-fluid" src={glasses} alt="glasses" />
                                    </div>
                                    <div className='py-3 p-2'>
                                        <h5 className="total-price">Title ex</h5>
                                        <p className='total-price'>/ititit/</p>
                                    </div>
                                    </div>
                                <div className='flex-grow-1'>
                                    <h5 className='total'>R500</h5>
                                </div>
                                
                                </div>
                            </div>
                            <div className='border-bottom py-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                                
                                <p className='total'> Subtotal</p>
                                <p className='total-price'>R1500</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='mb-0 total'>Shipping</p>
                                <p className='mb-0 total-price'>R105</p>
                            </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                               
                                <h4 className='total'>Total</h4>
                                <h5 className='total-price'>10500</h5>
                            </div>
                        </div>

                    </div>
            </Container>
    
    
    
    </>
  )
}

export default Checkout