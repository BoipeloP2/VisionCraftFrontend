import React from 'react'
import {Link} from "react-router-dom"
import BreadCrumb from '../components/BreadCrumb';
import BlogCard from '../components/BlogCard';
import {HiOutlineArrowLeft} from "react-icons/hi"
import Container from '../components/Container'

const SingleBlog = () => {
  return (
    <>
    <BreadCrumb title="Dynamic Blog Name"/>
    <Container class1="blog-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className="col-3">
                    <div className="filter-card mb-3">
                        <h3 className="filter-title">Single Blog</h3>
                        <div>
                            <ul>
                                <li>New Arrivals</li>
                                <li>Treatment</li>
                                <li>Style</li>
                                <li>Price</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-9">
                  <div className="single-blog-card">
                    <Link to="/blogs" className='d-flex align-items-center gap-10'><HiOutlineArrowLeft/>Go Back To Blogs</Link>
                    <h3 className="title">
                        A beatiful Sunday Morning With clear vision
                    </h3>
                    <img src="images/blog-1.jpg" alt="blog-1" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, 
                      facere repudiandae quasi maxime ab adipisci tempore necessitatibus
                       quod nesciunt cum fugit molestias accusantium, incidunt vel sed alias,
                        modi culpa suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Quisquam excepturi mollitia dolores, animi ea vero blanditiis assumenda dolor
                          voluptates quasi ratione consequuntur nisi, 
                      unde nostrum sint fugit nemo id cumque?, Lorem ipsum dolor sit,
                       amet consectetur adipisicing elit. Saepe alias pariatur, ut beatae est,
                        rem nam consequatur deserunt
                       impedit aspernatur consequuntur? Odit earum odio placeat sit quae.
                        Error, fugit quisquam?</p>
                  </div>
                </div>
            </div>
    </Container>
    </>
  )
}

export default SingleBlog