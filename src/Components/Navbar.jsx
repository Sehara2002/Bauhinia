import "../Components/CSS/navbar.css"
import "../Components/CSS/common.css"
import { Link, useNavigate } from 'react-router-dom'
import Logo from "./Logo"
import { FaSignInAlt, FaUser } from "react-icons/fa"
import { FaCartShopping, FaCircleQuestion } from "react-icons/fa6"
import { BiLogOut } from "react-icons/bi"
const Navbar = (props) => {
    const navigator = useNavigate();
    const logout = () => {
        let result = window.confirm("Are you Sure want to logout?");
        if(result){
            localStorage.setItem('login-state', null);
            localStorage.removeItem('userid');
            localStorage.removeItem('firstname');
            localStorage.removeItem('Role');
            navigator("/");
            return;
        }else{
            navigator("/");
            return;
        }
        
    }
    return (
        <div>
            <div className="nav-bar">
                <div className="row">
                    <div className="col-3">
                        <div className="logo">
                            <Logo />
                        </div>
                    </div>
                    <div className="col-6">
                        <ul className="navbar">
                            <li className="nav-item">
                                <Link className={`nav-link ${props.active === 'home' ? 'active' : ''}`} to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${props.active === 'products' ? 'active' : ''}`} to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${props.active === 'promotions' ? 'active' : ''}`} to="/promotions">Promotions</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${props.active === 'contact' ? 'active' : ''}`} to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${props.active === 'story' ? 'active' : ''}`} to="/story">Story</Link>
                            </li>

                        </ul>
                    </div>
                    <div className="col-3">
                        <div className="row icon-row">
                            <div className="col-sm-1 icon icon-row">
                                <Link className='nav-icon' to="/profile">

                                    <p className={`firstname ${localStorage.getItem('login-state') === 'true' ? 'show' : 'hide'}`}>{localStorage.getItem('firstname')}</p>

                                </Link>
                                <Link className={`nav-icon ${localStorage.getItem('login-state') === 'true' ? 'show' : 'hide'}`} to="/profile"><FaUser /></Link>
                                <Link className={`nav-icon ${(localStorage.getItem('login-state') ==='null'|| localStorage.getItem('login-state') === 'false')? 'show' : 'hide'}`} to="/login"><FaSignInAlt /></Link>
                            </div>
                            <div className="col-sm-1 icon">
                                <FaCartShopping className={`${localStorage.getItem('login-state') === 'true' ? 'show' : 'hide'}`} />

                            </div>
                            <div className="col-sm-1 icon">
                                <FaCircleQuestion />
                            </div>

                            <div className="col-sm-1 icon">
                                <BiLogOut className={`${localStorage.getItem('login-state') === 'true' ? 'show' : 'hide'}`} onClick={() => logout()}></BiLogOut>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar