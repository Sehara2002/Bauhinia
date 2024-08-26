import { Link } from "react-router-dom";
import "./product-section.css";
function Productsection() {
    return (
        <div className="product-section">
            <h1 className="product-title">
                Categories
            </h1>
            <div className="row">
                <div className="col-3">
                    <div className="card card-men">

                        <h3 className="card-title">
                            Men Section
                        </h3>
                        <p className="card-body">
                            Selection of smart, <br />
                            intelligent and <br />
                            handsome boys
                        </p>
                        <Link className="button-link" to="/products">Explore</Link>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card card-women">

                        <h3 className="card-title">
                            Women Section
                        </h3>
                        <p className="card-body">
                            For beautiful, <br />
                            Stylish and <br />
                            sweet girls
                        </p>
                        <Link className="button-link" to="/products">Explore</Link>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card card-kids">
                        <h3 className="card-title">
                            Kids Section
                        </h3>
                        <p className="card-body">
                            For beautiful, <br />
                            small and sweet <br />
                            angels
                        </p>
                        <Link className="button-link" to="/products">Explore</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productsection