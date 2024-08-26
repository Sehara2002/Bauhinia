import React, { useState } from 'react'
import "./CSS/dashboard.css";
import { Link } from "react-router-dom";
import axios from 'axios';
import moment from 'moment';
import "./CSS/orders.css"
import { FaClosedCaptioning } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

function Ordermanagement() {
  const [orders, setOrders] = useState([]);
  const [model, setModel] = useState(false);
  const [orderProducts, setOrderProducts] = useState([]);
  const [oid, setoid] = useState(0);
  try {
    axios.get("http://localhost:5000/admin/orders")
      .then(res => {
        if (orders.length === 0) {
          setOrders(res.data);
        }
      })
  } catch (error) {
    console.log(error);
  }

  const closeModel = () => {
    setModel(false);
  }
  const showProducts = (order_id) => {
    setModel(true);
    try {
      axios.get(`http://localhost:5000/admin/orders/products/${order_id}`)
        .then(res => {
          setOrderProducts(res.data);
        })
    } catch (error) {
      console.log(error);
    }


    setoid(order_id);
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
        <div >
          <table className="order-table">
            <caption>Order History</caption>
            <thead className="header">
              <tr>
                <th>Order ID</th>
                <th>Customer ID</th>
                <th>Ordered Date</th>
                <th>Total Amount</th>
                <th>Order Status</th>
                <th>Products</th>
              </tr>
            </thead>
            <tbody>
              {
                orders.map((order) => (
                  <tr key={order.o_id} className="product-row">
                    <td>{order['o_id']}</td>
                    <td>{order['c_id']}</td>
                    <td>{moment(order['o_date']).format('DD/MM/YYYY')}</td>
                    <td>{order['total_amount']}</td>
                    <td>{order['o_status']}</td>
                    <td><button className="showproductbtn" onClick={() => showProducts(order['o_id'])}>Show Products</button></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          <div className={`model-products ${model === true ? 'display-model' : 'hide-model'}`}>
            <button onClick={() => closeModel()} className="ModelClose"><FaX></FaX></button>

            <table className="orderproduct-table">
              <caption>Products of the Order {oid}</caption>
              <thead className='header'>
                <tr>
                  <th>Product Id</th>
                  <th>Product Name</th>
                  <th>Product Quantity</th>
                </tr>
              </thead>
              <tbody>
                {
                  orderProducts.map((product) => (
                    <tr key={product.PID} className="orderproduct-row">
                      <td>{product.PID}</td>
                      <td>{product.PNAME}</td>
                      <td>{product.PQTY}</td>
                    </tr>
                  ))


                }

              </tbody>
            </table>
          </div>

        </div>
      </div>
    </>
  )
}

export default Ordermanagement