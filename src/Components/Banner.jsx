import { useNavigate } from "react-router-dom"
import "./CSS/banner.css"
import banner from "./Images/banner.png"



const Banner = () => {
  const navigator = useNavigate();
const join = () =>{
  navigator("/register");
}


  return (
    <div className="banner-div">
      <div className="banner-container">
        <h1 className="topic">Welcome to Bauhinia</h1>
        <h3 className="subtopic">Find everything from one place</h3>
        <button className="joinus banner-button" onClick={()=>join()}>Join Us</button>
        <button className="start-tour banner-button">Start Tour</button>
      </div>
      <img src={`${banner}`} alt="" className="banner-image" />
    </div>
  )
}

export default Banner