import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import ReactImageZoom from "react-image-zoom";
import watch from "../";
import Color from '../components/Color';
import {TbGitCompare, TbHeart, TbShoppingCart} from "react-icons/tb";
import Container from '../components/Container'




const SingleProduct = () => {

  const props = {width:400, height:500, zoomWidth:500, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFeRW5ELVKETROmF-iZrqEXb9zqYVsU451w&usqp=CAU"};
  const [orderedProduct, setoredProduct] = useState(true);
  return (
    <>
    <BreadCrumb title="Product Name"/>

    <Container class1="main-product-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="col-6">
                  <div className="main-product-image">
                   <div>
                   <ReactImageZoom {...props}/>
                   </div>
                  </div>
                  <div className="other-product-images d-flex flex-wrap gap-15">
                    <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFeRW5ELVKETROmF-iZrqEXb9zqYVsU451w&usqp=CAU" alt="" className='img-fluid' /></div>
                    <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFeRW5ELVKETROmF-iZrqEXb9zqYVsU451w&usqp=CAU" alt="" className='img-fluid' /></div>
                    <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFeRW5ELVKETROmF-iZrqEXb9zqYVsU451w&usqp=CAU" alt="" className='img-fluid' /></div>
                    <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFeRW5ELVKETROmF-iZrqEXb9zqYVsU451w&usqp=CAU" alt="" className='img-fluid' /></div> 
                  </div>
                </div>
                <div className="col-6">
                  <div className="main-product-details">
                    <div className='border-bottom'>
                      <h3 className='title'>Glasses specially dewsigned for people with low vision</h3>
                    </div>
                    <div className="border-bottom py-3">
                      <p className='price'>R500</p>
                      <div className="d-flex align-items-center gap-10">
                      <ReactStars  count={5} size={24} value={4} edit={true} activeColor="#ffd700"/>
                      <p className="mb-0 t-review">(2 Reviews)</p>

                      </div>
                      <a href="#review" className='review-btn'>Write a review</a>
                    </div>
                    <div className="border-bottom py-2">
                      <div className='d-flex gap-10 align-items-center my-2 '>
                        <h3 className='product-heading'>Type:</h3>
                        <p className='product-data'>glasses</p>
                        </div>
                      <div className='d-flex gap-10 align-items-center my-2'>
                        <h3 className='product-heading'>Brand:</h3>
                        <p className='product-data'>glasses</p>
                        </div>
                      <div className='d-flex gap-10 align-items-center my-2'>
                        <h3 className='product-heading'>Category:</h3>
                        <p className='product-data'>glasses</p>
                        </div>
                      <div className='d-flex gap-10 align-items-center my-2'>
                        <h3 className='product-heading'>Tag:</h3>
                        <p className='product-data'>glasses</p>
                        </div>
                        <div className='d-flex gap-10 align-items-center my-2'>
                        <h3 className='product-heading'>Availability:</h3>
                        <p className='product-data'>In Stock</p>
                        </div>
                        <div className='d-flex gap-10 align-items-column pt-2 mt-2 mb-3'>
                        <h3 className='product-heading'>Size:</h3>
                        <div className="d-flex flex-wrap gap-15">
                          <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                          <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                          <span className="badge border border-1 bg-white text-dark border-secondary">L</span>
                          <span className="badge border border-1 bg-white text-dark border-secondary">XL</span>
                        </div>
                        </div>
                        <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                        <h3 className='product-heading'>Color:</h3>
                        <Color/>
                        </div>
                        <div className='d-flex gap-15 align-items-center flex-row  mb-3'>
                        <h3 className='product-heading'>Quantity:</h3>
                        <div className=''>
                          <input type="number" className="form-control" min={1} max={10} style={{"width":"60px"}} id="" />
                        </div>
                        <div className='d-flex align-items-center gap-30 ms-5'>
                          <button type="submit"  className='button border-0'>Add to Cart</button> 
                          <Link to="/"  className='button signup'>Buy it now</Link> 
                        </div>

                        </div>
                        <div className="d-flex align-items-column gap-15">
                        <div>
                            <a href="">
                              <TbHeart className='fs-5 me-1'/> Add to Wishlist</a>
                          </div>
                          <div>
                            <a href=""><TbGitCompare className='fs-5 me-1'/>Add to Compare</a>
                          </div>
                          
                        </div>
                        <div className='d-flex gap-10 flex-column pt-2 my-2'>
                        <h3 className='product-heading'>Shipping & Returns</h3>
                        <p className='product-data'>Free shipping and returns available on all orders! <br /> We ship all orders for over R1000 for free within 5 - 10 business days</p>
                        </div>

                    </div>
                  </div>
                </div>
            </div>
    </Container>

    <Container class1="description-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="col-12">
                <h4 className="">Description</h4>

                  <div className='bg-white p-3'>
                    <p className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aliquid quisquam commodi minima cumque incidunt inventore quo ad quaerat corrupti dolores repellat quia repellendus temporibus iusto voluptatibus omnis, provident sequi.
                    </p>
                  </div>
                </div>
            </div>
        </Container>
                        
    <Container id="review" class1="reviews-wrapper  home-wrapper-2">
            <div className="row">
                <div className="col-12">
                <h3>Reviews</h3>

                    <div className="review-inner-wrapper">
                    <div className="review-head d-flex justify-content-between align-items-end">
                        <div>
                            <h4 className='mb-2'>Customer Reviews</h4>
                        <div className='d-flex gap-10 align-items-center'>
                          <ReactStars  cout={5} size={24} value={4} edit={false} activeColor="#ffd700"/>
                        <p className="mb-0">Based on 2 Reviews</p>
                        </div>
                        </div>
                        {orderedProduct && (<div><a className='text-dark text-decoration-underline' href=''>Write A Review</a></div>)}
                        
                    </div>
                    <div   className="review-form py-4">
                      <h4>Write A Reivew</h4>
                    <form action="" className='d-flex flex-column gap-15'>
                      <div>
                      <ReactStars  count={5} size={24} value={4} edit={true} activeColor="#ffd700"/>

                      </div>
                    <div><textarea className="w-100 form-control" cols="30" rows="5" placeholder="Comment" ></textarea></div>
                    <div className='d-flex justify-content-end'>
                  <button className='button border-0'> Send Review</button>
                    </div>
                  </form>
                    </div>
                    <div className="reviews mt-4">
                      <div className="review">
                       <div className='d-flex gap-10 align-items-center'><h6>Boipelo</h6><ReactStars count={5} size={24} value={3} edit={false}/></div> 
                        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, rerum ipsa. Maiores iure autem in! Officia at necessitatibus, voluptatum commodi maiores, modi mollitia est repellat hic omnis cumque repudiandae quibusdam?</p>
                      </div>
                    </div>
                    </div>
                </div>
            </div>
    </Container>
    <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          {/* <div className="col-2 "></div>
          <div className="col-2"></div> */}
          < ProductCard />
         
        </div>
    </Container>
    </>
  )
}

export default SingleProduct