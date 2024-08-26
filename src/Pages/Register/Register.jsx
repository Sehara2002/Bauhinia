import { useRef, useState } from "react"
import "./register.css"
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const [message,setMessage] = useState(null);
  const [error,setError] = useState(null);
  let fname = useRef('null');
  let lname = useRef('null');
  let age = useRef(0);
  let contact = useRef('null');
  let email = useRef('null');
  let username = useRef('null');
  let password = useRef('null');
  let cpassword = useRef('null');

  const register = async () => {
    let efname = fname.current.value;
    let elname = lname.current.value;
    let eage = age.current.value;
    let econtact = contact.current.value;
    let eemail = email.current.value;
    let eusername = username.current.value;
    let epassword = password.current.value;
    let ecpassword = cpassword.current.value;

    if (epassword !== ecpassword) {
      console.log("Password Mismatch");
      return;
    }

    let params = {
      firstName: efname,
      lastName: elname,
      age: eage,
      contact: econtact,
      email: eemail,
      username: eusername,
      password: epassword
    }

    try {
      let response = await axios.post("http://localhost:5000/newuser/add", {
        firstName: efname,
        lastName: elname,
        age: eage,
        contact: econtact,
        email: eemail,
        username: eusername,
        password: epassword
      });

      if(response.data.Message !== null){
        setMessage(response.data.Message+" Your Id : "+response.data.UserId);
        return;
      }
      if(response.data.Error !== null){
        setError(response.data.Error);
      }

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="register-section">
      <div className="register-form-section">
        <form>
          <h1 className="form-title">
            Create Your Account
          </h1>
          <div className="input">
            <input type="text" ref={fname} className="data-input" placeholder="First Name" required />
          </div>
          <div className="input">
            <input type="text" ref={lname} className="data-input" placeholder="Last Name" required />
          </div>
          <div className="input">
            <input type="text" ref={age} className="data-input" placeholder="Age" required />
          </div>
          <div className="input">
            <input type="text" ref={contact} className="data-input" placeholder="Contact Number" required />
          </div>
          <div className="input">
            <input type="email" ref={email} className="data-input" placeholder="Email" required />
          </div>
          <div className="input">
            <input type="text" ref={username} className="data-input" placeholder="Username" required />
          </div>
          <div className="input">
            <input type="password" ref={password} className="data-input" placeholder="Password" required />
          </div>
          <div className="input">
            <input type="password" ref={cpassword} className="data-input" placeholder="Confirm Password" required />
          </div>
        </form>
        <div className={`messageBox ${(message!==null)?'show-box':'hide-box'}`}>
          <p className="successMessage">{message}</p>
        </div>
        <div className={`errorBox ${(error!==null)?'show-box':'hide-box'}`}>
          <p className="errorMessage">{error}</p>
        </div>
        <div className="input">
          <button type="button" className="register-button" onClick={() => register()}>Register Me</button>
        </div>
        <h3 className="login-here">Already Joined: <Link to="/login"> Login here</Link></h3>
      </div>
    </div>
  )
}

export default Register