import Banner from "../../Components/Banner"
import Footer from "../../Components/Footer"
import Navbar from "../../Components/Navbar"
import Featuredproducts from "./Components/Featuredproducts"
import Productsection from "./Components/Productsection"

const Home = () => {
  return (
    <div>
        <title>Bauhinia</title>
        <Navbar active="home"/>
        <Banner/>
        <Productsection/>
        <Featuredproducts/>
        <Footer/>
    </div>
    
  )
}

export default Home