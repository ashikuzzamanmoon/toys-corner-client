
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Banner = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686884.jpg?size=626&ext=jpg&uid=R101321192&ga=GA1.2.1999469744.1683008976&semt=ais" className="w-full rounded-xl" />
                <div className="absolute h-full left-0 top-0 right-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] hover:bg-gradient-to-l rounded-xl">
                    <div className="text-white space-y-5 text-center mt-40">
                        <h2 className="text-6xl font-bold">PICK THE BEST TOY <br /> FOR YOUR KID</h2>
                        <p className="text-xl">Make play time a blast with our finest toys and games!</p>
                        <button className="btn btn-secondary">Explore Now</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/free-photo/adorable-little-poodle-with-teddy-bear-toy-blue-surface_181624-39163.jpg?size=626&ext=jpg&uid=R101321192&ga=GA1.2.1999469744.1683008976&semt=ais" className="w-full rounded-xl" />
                <div className="absolute h-full left-0 top-0 right-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] hover:bg-gradient-to-l rounded-xl">
                    <div className="text-white space-y-5 text-center mt-40">
                        <h2 className="text-6xl font-bold">PICK THE BEST TOY <br /> FOR YOUR KID</h2>
                        <p className="text-xl">Make play time a blast with our finest toys and games!</p>
                        <button className="btn btn-secondary">Explore Now</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/free-photo/3d-cartoon-background-children_23-2150150802.jpg?size=626&ext=jpg&uid=R101321192&ga=GA1.2.1999469744.1683008976&semt=ais" className="w-full rounded-lg" />
                <div className="absolute h-full left-0 top-0 right-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] hover:bg-gradient-to-l rounded-xl">
                    <div className="text-white space-y-5 text-center mt-40">
                        <h2 className="text-6xl font-bold">PICK THE BEST TOY <br /> FOR YOUR KID</h2>
                        <p className="text-xl">Make play time a blast with our finest toys and games!</p>
                        <button className="btn btn-secondary">Explore Now</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686892.jpg?size=626&ext=jpg&uid=R101321192&ga=GA1.2.1999469744.1683008976&semt=ais" className="w-full rounded-lg" />
                <div className="absolute h-full left-0 top-0 right-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] hover:bg-gradient-to-l rounded-xl">
                    <div className="text-white space-y-5 text-center mt-40">
                        <h2 className="text-6xl font-bold">PICK THE BEST TOY <br /> FOR YOUR KID</h2>
                        <p className="text-xl">Make play time a blast with our finest toys and games!</p>
                        <button className="btn btn-secondary">Explore Now</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;