import useTitle from "../../../hook/useTitle";
import Gallery from "../../Gallery/Gallery";
import Offers from "../../Offers/Offers";
import Services from "../../Services/Services";
import Banner from "../Banner/Banner";


const Home = () => {
    useTitle('Home')
    return (
        <div>
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