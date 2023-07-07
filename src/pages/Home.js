import React from 'react';
import {Link} from "react-router-dom";
import Marquee from 'react-fast-marquee';
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProducts from '../components/SpecialProducts';
import PopularProducts from '../components/PopularProducts';
import Container from '../components/Container';
import {services} from '../utils/Data';


const Home = () => {
  return (
    <>
    <Container class1="home-wrapper-1 py-5"> 
    <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative ">
              <img src="images/tomford_resized.jpg" className='img-fluid rounded-3' alt="banner" />
              <div className="main-banner-content position-absolute">
                <h4>Super Glasses Vision</h4>
                <h5>Vision clear</h5>
                <p>R300</p>
                <Link className="button">Buy Now</Link>
              </div>
            </div>

          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-context-between align-items-center">
            <div className="small-banner position-relative ">
              <img src="images/catbanner-01.jpg" className='img-fluid rounded-3' alt="banner" />
              <div className="small-banner-content position-absolute">
                <h4>Super Glasses Vision</h4>
                <h5>Vision clear</h5>
                <p>R300</p>
              </div>
            </div>
            <div className="small-banner position-relative">
              <img src="images/catbanner-02.jpg" className='img-fluid rounded-3' alt="banner" />
              <div className="small-banner-content position-absolute">
                <h4>New Arrival  </h4>
                <h5>Vision Sweet</h5>
                <p>R300</p>
              </div>
            </div>
            <div className="small-banner position-relative">
              <img src="images/catbanner-03.jpg" className='img-fluid rounded-3' alt="banner" />
              <div className="small-banner-content position-absolute">
                <h4>Best Clear Vision</h4>
                <h5>Top Vision</h5>
                <p>R300</p>
              </div>
            </div>
            <div className="small-banner position-relative">
              <img src="images/catbanner-04.jpg" className='img-fluid rounded-3' alt="banner" />
              <div className="small-banner-content position-absolute">
                <h4>Great Top Clear</h4>
                <h5>Best clear</h5>
                <p>R300</p>
              </div>
            </div>
            </div>
          </div>
        </div>
        </Container>
        
     <Container class1="home-wrapper-2 py-5">
     <div className="row">
        <div className="col-12">
          <div className="services d-flex align-items justify-content-between">
        {  services.map(( i, j ) => {
          return(
            <div className="d-flex align-items-center gap-15" key={j} >
              <img src={i.image} alt="services" />
              <div>
                <h6>{i.title}</h6>
                <p className='mb-0'>{i.tagline}</p>
              </div>
            </div>
            );
               }
          )}
          
          </div>
        </div>
      </div>
     </Container>

     <Container class1="home-wrapper-3 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Sunglasses</h6>
                  <p>10 items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>

              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Eye Glasses</h6>
                  <p>10 items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Polarized </h6>
                  <p>10 items</p>
                </div>
                <img src="images/laptop.jpg" alt="camera" />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>High-index</h6>
                  <p>10 items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>

              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Sunglasses</h6>
                  <p>10 items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>

              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Eye Glasses</h6>
                  <p>10 items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Polarized </h6>
                  <p>10 items</p>
                </div>
                <img src="images/laptop.jpg" alt="camera" />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>High-index</h6>
                  <p>10 items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>

            </div>
          </div>
        </div>
     </Container>
      
      <Container class1="featured-wrapper py-5 home-wrapper-2">
      <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          {/* <ProductCard />
          <ProductCard /> */}
        </div>
      </Container>

   

    {/* <section className="famous-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-3">
            <div className="famous-card bg-dark text-white">
              <h5>
                Big Screen
              </h5>
              <h6>Smart watch Series</h6>
              <p>From R500 or R60/M for 12 Mo*</p>
            </div>
          </div>
        </div>
      </div>
    </section> */}
         <Container class1="special-wrapper py-5 home-wrapper-2">
         <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>

          </div>
        </div>
        <div className="row ">
          <SpecialProducts />
          <SpecialProducts />
          <SpecialProducts />
        </div>
         </Container>
   


    <section className="popular-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          {/* <div className="col-2 "></div>
          <div className="col-2"></div> */}
          < PopularProducts />
          < PopularProducts/>
          < PopularProducts />
          < PopularProducts />
        </div>
      </div>
    </section>
   
    <Container class1="marque-wrapper py-5">
    <div className="row">
          <div className="col-12">
            <div className="marque-inner-wrapper card-wrapper">
              <Marquee className='d-flex'>
                <div className='mx-4 w-10'><img src="images/brand-01.png" alt="brand" /></div>
                <div className='mx-4 w-10'><img src="images/brand-02.png" alt="brand" /></div>
                <div className='mx-4 w-10'><img src="images/brand-03.png" alt="brand" /></div>
                <div className='mx-4 w-10'><img src="images/brand-04.png" alt="brand" /></div>
                <div className='mx-4 w-10'><img src="images/brand-05.png" alt="brand" /></div>
                <div className='mx-4 w-10'><img src="images/brand-06.png" alt="brand" /></div>
              </Marquee>
            </div>
          </div>
        </div>
    </Container>

     <Container class1="blog-wrapper py-5 home-wrapper-2">
     <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest News</h3>
          </div>
          <div className="row">
            <div className="col-3">
            <BlogCard />
            </div>
            <div className="col-3">
            <BlogCard />
            </div>
            <div className="col-3">
            <BlogCard />
            </div>
            <div className="col-3">
            <BlogCard />
            </div>
          </div>
        </div>
     </Container>

    
    

    </>
  )
}

export default Home