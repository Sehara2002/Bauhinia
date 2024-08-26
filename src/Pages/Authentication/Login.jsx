import { FaLock, FaUser } from "react-icons/fa6"
import "./login.css"
import { FaUserAlt } from "react-icons/fa"
import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

const Login = () => {
  let username = useRef('null');
  let password = useRef('null');
  let navigator = useNavigate();

  const login = () => {
    let user = username.current.value;
    let pass = password.current.value;
    axios.get(`http://localhost:5000/user/${user}`)
      .then(res => {
        if (user === res.data.username && pass === res.data.password) {
          if (res.data.userRole === 'Admin') {
            axios.get(`http://localhost:5000/staff/${user}`)
              .then(result => {
                localStorage.setItem('login-state', true);
                localStorage.setItem('userid', result.data.s_id);
                localStorage.setItem('firstname', result.data.sf_name);
                localStorage.setItem('Role', result.data.s_role);

                alert(`Login Successfull. Welcome ${res.data.userRole}, ${result.data.sf_name}`);
                navigator("/Admin/dashboard");
              })

              return;
          }
          if (res.data.userRole === 'Customer') {
            axios.get(`http://localhost:5000/customer/${user}`)
              .then(result => {
                localStorage.setItem('login-state', true);
                localStorage.setItem('userid', result.data.c_id);
                localStorage.setItem('firstname', result.data.cf_name);
                localStorage.setItem('Role', 'Customer');
                alert(`Login Successfull. Welcome ${result.data.cf_name}`);
                navigator("/");
              })

              return;;
          }

          //   alert(`Login Successful. Welcome ${res.data.firstName}`);
          //   localStorage.setItem('login-state', true);
          //   localStorage.setItem('userid', res.data.CustomerId);
          //   localStorage.setItem('firstname', res.data.firstName);
          //   localStorage.setItem('userRole',res.data.userRole);
          //   if(res.data.userRole === 'Customer'){
          //     navigator("/");
          //     return;
          //   }else if(res.data.userRole==='Admin'){
          //     navigator("/Admin/dashboard");
          //     return;
        }
        else{
          alert('Login Failed.. Check the Credentials');
          navigator("/login");
        }


      }).catch(err => {
        alert(err.response);
        navigator("/login");
      })
  }
  return (
    <div className="loginPage">
      <div className="login-form">
        <div className="row">
          <div className="col-6">

            <form className="Login">
              <h1>Login</h1>
              <div className="user-icon">
                <FaUser />
              </div>
              <div className="input-group">
                <FaUserAlt className="login-icon" />
                <input type="text" name="username" id="username" className="input-data" placeholder="Username" ref={username} />
              </div>

              <div className="input-group">
                <FaLock className="login-icon" />
                <input type="password" name="password" id="password" className="input-data" placeholder="Password" ref={password} />
              </div>
            </form>
            <div className="input-group">
              <button className="login-btn" onClick={() => login()}>Login</button>
            </div>
            <h4>Or</h4>
            <p className="donthave">Don't have Account?
              <Link to="/register">Create new Account</Link>
            </p>

          </div>
          <div className="col-6 image">
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login