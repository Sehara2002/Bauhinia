import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product';
import Contact from './Pages/Contact/Contact';
import Story from './Pages/Story/Story';
import Allproducts from './Pages/AllProducts/Allproducts';
import Login from './Pages/Authentication/Login';
import Register from "./Pages/Register/Register"
import Cart from "./Pages/Cart/Cart"
import Promotions from './Pages/Promotions/Promotions';
import Profile from './Pages/Profile/Profile';
import Dashboard from './Pages/Admin/Dashboard';
import Customermanagement from './Pages/Admin/Customermanagement';
import Productmanagement from './Pages/Admin/Productmanagement';
import Staffmanagement from './Pages/Admin/Staffmanagement';
import Ordermanagement from './Pages/Admin/Ordermanagement';
import Profilemanagement from './Pages/Admin/Profilemanagement';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/products',
    element: <Allproducts />
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/story",
    element: <Story />,
  },
  {
    path: "/viewproduct",
    element: <Product />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/promotions",
    element: <Promotions />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/Admin/dashboard",
    element: <Dashboard />
  },
  {
    path: "/Admin/customers",
    element: <Customermanagement />
  },
  {
    path: "/Admin/products",
    element: <Productmanagement />
  },
  {
    path: "/Admin/staff",
    element: <Staffmanagement />
  },
  {
    path:"/Admin/orders",
    element:<Ordermanagement/>
  },
  {
    path:"/Admin/profile",
    element:<Profilemanagement/>
  }




])


root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
