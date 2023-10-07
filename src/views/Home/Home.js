import Navbar from "./../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";
import "./Home.css"
function Home (){
    return (
        <div className="home-container">
            <Navbar />
            <h1>This is home page</h1>
            <Footer/>
        </div>
    )


}
export default Home