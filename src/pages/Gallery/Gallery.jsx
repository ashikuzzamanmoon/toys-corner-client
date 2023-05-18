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
        <div className="mt-12">
            <div className="text-center">
                <h2 className="text-5xl font-bold">Our Toys Gallery</h2>
                <p>Welcome to Toys Gallery, your ultimate destination for all things toys! We take pride in offering a wide range of toys that cater to children of all ages and interests. </p>
            </div>
            <div>
                {
                    toys?.map(toy => <GalleryCard key={toy._id} toy={toy}></GalleryCard>)
                }
            </div>
        </div>
    );
};

export default Gallery;