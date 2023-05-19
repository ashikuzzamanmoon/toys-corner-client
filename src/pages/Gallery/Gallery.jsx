import { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";


const Gallery = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toysGallery')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setToys(data)
            })
    }, [])
    return (
        <div className="mt-16">
            <div className="text-center">
                <h2 className="text-5xl font-bold mb-6">Our Toys Gallery</h2>
                <p className="mb-14">Welcome to Toys Gallery, your ultimate destination for <br /> all things toys! We take pride in offering a wide range <br /> of toys that cater to children of all ages and interests. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                {
                    toys?.map(toy => <GalleryCard key={toy._id} toy={toy}></GalleryCard>)
                }
            </div>
        </div>
    );
};

export default Gallery;