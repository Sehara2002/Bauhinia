import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import Img1 from "./Images/Img1.jpeg"
import "./CSS/dashboard.css";
import "./CSS/product-management.css";
import { Link } from "react-router-dom";
function Productmanagement() {
  const [products, setProducts] = useState([]);
  let [addNew, setAddNew] = useState(false);
  let [buttonText, setButtonText] = useState('Add New Product');

  const pname = useRef(null);
  const pbatch = useRef(null);
  const pprice = useRef(null);
  const pstock = useRef(null);


  try {
    axios.get("http://localhost:5000/admin/products")
      .then(res => {
        if (products.length === 0) {
          setProducts(res.data);
        }
      })
  } catch (error) {
    console.log(error);
  }


  const addNewProduct = () => {
    if (addNew) {
      setAddNew(false);
      setButtonText('Add New Product');
    } else {
      setButtonText('Close Product');
      setAddNew(true);
    }
  }


  const insertProduct = async () => {
    let productName = pname.current.value;
    let productBatch = pbatch.current.value;
    let productPrice = pprice.current.value;
    let productStock = pstock.current.value;
    try {
      let result = await axios.post("http://localhost:5000/admin/addproduct", {
        p_name: productName,
        p_batch: productBatch,
        p_price: productPrice,
        p_stock: productStock
      });


      if (result.data.Message !== null) {
        console.log(result.data.productId);
        alert(result.data.Message+" Product Id : "+result.data.productId);
        return;
      }

      if (result.data.Error !== null) {
        console.log(result.data.Error);
        return;
      }
    } catch (error) {
      console.log(error);
    }

  }
  return (

    <>
      <div className="row">
        <div className="col-2">
          <div className="side-bar">
            <div className="logo-item">
              BCH
            </div>
            <div className="link-list">
              <div className="link-item">
                <Link className="side-bar-item" to="/Admin/dashboard">Dashboard</Link>
              </div>
              <div className="link-item">
                <Link className="side-bar-item" to="/Admin/products">Products</Link>
              </div>
              <div className="link-item">
                <Link className="side-bar-item" to="/Admin/staff">Staff</Link>
              </div>
              <div className="link-item">
                <Link className="side-bar-item" to="/Admin/orders">Orders</Link>
              </div>
              <div className="link-item">
                <Link className="side-bar-item" to="/Admin/customers">Customers</Link>
              </div>
              <div className="link-item">
                <Link className="side-bar-item" to="/Admin/profile">Account</Link>
              </div>
            </div>
          </div>
        </div>
        <div className={`product-table-section ${(addNew === true) ? 'col-9' : 'col-10'}`}>
          <button className="open-close-btn" onClick={() => addNewProduct()}>{buttonText}</button>

          <table className="product-table">
            <caption>All Products</caption>
            <thead className="header">
              <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Product Batch</th>
                <th>Product Price</th>
                <th>Product Stock</th>
              </tr>
            </thead>
            <tbody>
              {
                products.map((product) => (
                  <tr key={product.id} className="product-row">
                    <td>{product['p_id']}</td>
                    <td>{product['p_name']}</td>
                    <td>{product['p_batch']}</td>
                    <td>{product['p_price']}</td>
                    <td>{product['p_stock']}</td>
                  </tr>
                ))


              }
            </tbody>
          </table>


        </div>
        <div className={`addNewProduct ${(addNew === true) ? 'show-form' : 'hide-form'}`}>
          <div className="form-container">
            <form>
              <h3 className="product-form-title">
                Add New Product
              </h3>
              <div className="input-section">
                <div className="input-divs">
                  <input type="text" ref={pname} className="product-input" placeholder='Product Name' />
                </div>
                <div className="input-divs">
                  <input type="text" ref={pbatch} className="product-input" placeholder='Product Batch' />
                </div>
                <div className="input-divs">
                  <p>Product Image</p>
                  <input type="file" className="product-input" placeholder='Image' />
                </div>
                <div className="input-divs">
                  <input type="text" ref={pprice} className="product-input" placeholder='Product Price' />
                </div>
                <div className="input-divs">
                  <input type="text" ref={pstock} className="product-input" placeholder='Product Stock' />
                </div>
              </div>
            </form>

            <div className="input-divs">
              <button onClick={() => insertProduct()} className="product-input button-add-product">Add Product</button>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default Productmanagement