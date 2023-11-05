import errorPic from "../../../public/3828537.jpg"
import Footer from "../../MainLayout/Footer/Footer";
import NavBar from "../../MainLayout/NavBar/NavBar";

const ErrorPage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="flex items-center justify-center">
                <img className="w-[700px] h-[600px]" src={errorPic} alt="" />
            </div>
            <Footer></Footer>
        </div>
    );


};

export default ErrorPage;