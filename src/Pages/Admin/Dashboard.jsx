import { Link, useNavigate } from "react-router-dom";
import "./CSS/dashboard.css";
import axios from "axios";
import { useState } from "react";
import { BiLogOut } from "react-icons/bi";

const Dashboard = () => {
  let [pending, setPending] = useState();
  let [completed, setCompleted] = useState();
  let [income, setIncome] = useState();
  let [customer, setCustomers] = useState();
  let [staff, setStaff] = useState();
  let [product, setProduct] = useState();
  const firsrName = localStorage.getItem("firstname");
  const userRole = localStorage.getItem('userRole');

  const navigator = useNavigate();
  axios.get("http://localhost:5000/business")
    .then(res => {
      setPending(res.data.pendingOrders);
      setCompleted(res.data.completedOrders);
      setIncome(res.data.totalIncome);
      setCustomers(res.data.totalCustomers);
      setProduct(res.data.totalProducts);
      setStaff(res.data.totalStaff);
    })


  const logout = () => {
    let res = window.confirm("Are you sure want to Logout? ");
    if (res) {
      localStorage.setItem('login-state', null);
      localStorage.removeItem('userid');
      localStorage.removeItem('firstname');
      localStorage.removeItem('Role');
      navigator("/");
      return;
    } else {
      navigator("/");
    }
  }


  return (
    <>
      <div className="container">
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
          <div className="col-10">
            <div className="title-row">
              <h1>Welcome {firsrName} ,</h1>
              <BiLogOut onClick={() => logout()} className="Logoutbtn"></BiLogOut>
            </div>
            <div className="summary-row">
              <div className="summary-card">
                <h3 className="summary-title">
                  Pending Orders
                </h3>
                <p className="summary-content">
                  {pending}
                </p>
              </div>
              <div className="summary-card">
                <h3 className="summary-title">
                  Completed Orders
                </h3>
                <p className="summary-content">
                  {completed}
                </p>
              </div>
              <div className="summary-card">
                <h3 className="summary-title">
                  Today Income (LKR)
                </h3>
                <p className="summary-content income-total">
                  {income}
                </p>
              </div>
            </div>

            <div className="summary-row">
              <div className="summary-card">
                <h3 className="summary-title">
                  Total Customers
                </h3>
                <p className="summary-content">
                  {customer}
                </p>
              </div>
              <div className="summary-card">
                <h3 className="summary-title">
                  Total Staff
                </h3>
                <p className="summary-content">
                  {staff}
                </p>
              </div>
              <div className="summary-card">
                <h3 className="summary-title">
                  Product Varieties
                </h3>
                <p className="summary-content">
                  {product}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard