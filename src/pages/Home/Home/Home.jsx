import useTitle from "../../../hook/useTitle";
import Gallery from "../../Gallery/Gallery";
import Offers from "../../Offers/Offers";
import Services from "../../Services/Services";
import Banner from "../Banner/Banner";
import SubCategory from "../SubCategory/SubCategory";


const Home = () => {
    useTitle('Home')
    return (
        <div>
            <div className="mt-12">
                <Banner></Banner>
            </div>
            <Gallery></Gallery>
            <SubCategory></SubCategory>
            <Offers></Offers>
            <Services></Services>
        </div>
    );
};

export default Home;