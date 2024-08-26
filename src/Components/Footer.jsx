
import { FaFacebook, FaHand, FaInstagram, FaWhatsapp } from "react-icons/fa6"
import "./CSS/common.css"
import "./CSS/footer.css"
import { Link } from "react-router-dom"
function Footer() {
    return (
        <div className="footer-section">
            <div className="row">
                <div className="col-3">
                    <div className="logo">
                        <h3 className="logo-namef">BCH</h3>
                        <p className="logo-text">Bauhinia Clothing House</p>
                    </div>
                </div>
                <div className="col-3">
                    <div className="links">
                        <h3>Useful Links</h3>
                        <ul type="none">
                            <li>
                                <Link className="footer-link" to="/">Home</Link>
                            </li>
                            <li>
                                <Link className="footer-link" to="/products">Products</Link>
                            </li>
                            <li>
                                <Link className="footer-link" to="/promotions">Promotions</Link>
                            </li>
                            <li>
                                <Link className="footer-link" to="/contact">Contact Us</Link>
                            </li>
                            <li>
                                <Link className="footer-link" to="/story">Our Story</Link>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="col-3">
                    <div className="contact-info">
                        <h3>Contact No : +94 11 222 33 34</h3>
                        <h3>Email : bauhinia.clothing@bch.lk</h3>
                        <h3>Address: No. 117/22, <br /> Main Street, <br /> Colombo 11</h3>
                        <div className="icon-set">
                            <div className="micon fb">
                                <FaFacebook />
                                </div>
                            <div className="micon insta">
                                <FaInstagram />
                            </div>
                            <div className="micon wtsp">
                                <FaWhatsapp />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer