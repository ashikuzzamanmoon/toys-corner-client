import { Outlet } from "react-router-dom";
import Footer from "../Routes/pages/Shared/Footer/Footer";
import Navbar from "../Routes/pages/Shared/NavBar/Navbar";


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