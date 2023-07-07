import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import BlogCard from '../components/BlogCard';
import Container from '../components/Container';

function Blog() {
  return (
    <>
    <BreadCrumb title="Blogs"/>
    <Container class1="blog-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className="col-3">
                    <div className="filter-card mb-3">
                        <h3 className="filter-title">Blog categories</h3>
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
                    <div className="row">
                        <div className="col-6 mb-3">
                        <BlogCard/>
                        </div>
                        <div className="col-6 mb-3">
                        <BlogCard/>
                        </div>
                        <div className="col-6 mb-3">
                        <BlogCard/>
                        </div>
                        <div className="col-6 mb-3">
                        <BlogCard/>
                        </div> 
                    </div>
                </div>
            </div>
        </Container>
    </>
  )
}

export default Blog