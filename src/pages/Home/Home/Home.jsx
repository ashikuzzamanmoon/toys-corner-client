import Gallery from "../../Gallery/Gallery";
import Offers from "../../Offers/Offers";
import Services from "../../Services/Services";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div className="w-[1200px] mx-auto ">
            <div className="mt-12">
                <Banner></Banner>
            </div>
            <Gallery></Gallery>
            <Offers></Offers>
            <Services></Services>
        </div>
    );
};

export default Home;