import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/Shared/NavBar/NavBar";
import Footer from "../pages/Home/Shared/Footer/Footer";



const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;