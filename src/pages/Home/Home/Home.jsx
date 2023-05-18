import Gallery from "../../Gallery/Gallery";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div>
            <div className="mt-12">
                <Banner></Banner>
            </div>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;