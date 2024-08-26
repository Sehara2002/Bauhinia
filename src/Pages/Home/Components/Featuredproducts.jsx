import React from 'react'
import { Link } from 'react-router-dom'
import "./featured-products.css"
import Image1 from "../Images/Banner-Men2.jpeg"
import Image2 from "../Images/banner-product1.jpeg"
import Image3 from "../Images/banner-product3.jpeg"
function Featuredproducts() {
    return (
        <div className="featured-products">
            <h1 className="features-title">Featured Products</h1>
            <div className="row">
                <div className="col-3">
                    <div className="card-p">
                        <img src={Image1} alt="" className="card-image" />
                        <h3 className="c-title">
                            Men's Formal Dress
                        </h3>
                        <p className="c-body">
                            Rs.12000.00

                        </p>
                        <button className="btn-shopnow">Shop Now</button>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card-p">
                        <img src={Image2} alt="" className="card-image" />
                        <h3 className="c-title">
                            Womens' slim & soft frock
                        </h3>
                        <p className="c-body">
                            Rs.7900.00 <br />

                        </p>
                        <button className="btn-shopnow">Shop Now</button>

                    </div>
                </div>
                <div className="col-3">
                    <div className="card-p">
                        <img src={Image3} alt="" className="card-image" />
                        <h3 className="c-title">
                            Womens' party frock
                        </h3>
                        <p className="c-body">
                            Rs.6800.00
                        </p>
                        <button className="btn-shopnow">Shop Now</button>
                    </div>
                </div>
            </div>

            <p className="all-product">
                <Link className='featured-button' to="/products">See all Products</Link>
            </p>
        </div>
    )
}

export default Featuredproducts