import React from 'react'
import {Link} from "react-router-dom"
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';

const ShippingPolicy = () => {
  return (
    <>
    <BreadCrumb title="Shipping Policy"/>
    <Container class1="policy-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="col-12">
                    <div className="policy">
                        
                    </div>
                </div>
        </div>
    </Container>
    </>
  )
}

export default ShippingPolicy