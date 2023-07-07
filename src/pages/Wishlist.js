import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container'


const Wishlist = () => {
  return (


    <>
    <BreadCrumb title="Wishlist"/>

    <Container class1="wishlist-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className="col-3">
                    <div className="wishlist-card position-relative">
                        <img src="/images/cross.svg" alt="cross" className='position-absolute cross img-fluid' />
                        <div className="wishlist-card-image">
                            <img src="images/watch.jpg" className='img-fluid w-100' alt="watch" />
                        </div>
                        <div className='px-2 py-3'>
                        <h5 className='title'> Super clear view For your eyes</h5>
                            <h6 className='price mb-3 mt-3'>R500</h6>
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="wishlist-card position-relative">
                        <img src="/images/cross.svg" alt="cross" className='position-absolute cross img-fluid' />
                        <div className="wishlist-card-image">
                            <img src="images/watch.jpg" className='img-fluid w-100' alt="watch" />
                        </div>
                        <div className='px-2 py-3'>
                        <h5 className='title'> Super clear view For your eyes</h5>
                            <h6 className='price mb-3 mt-3'>R500</h6>
                        </div>
                    </div>
                </div>
            </div>
    </Container>
    
    </>
  )
}

export default Wishlist