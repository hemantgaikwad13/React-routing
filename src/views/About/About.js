import Navbar from "./../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";
import "./About.css"
function About (){
    return (
        <div className="about-Container">
            <Navbar />
            <h1>This is about page</h1>
            <Footer/>
        </div>
    )


}
export default About