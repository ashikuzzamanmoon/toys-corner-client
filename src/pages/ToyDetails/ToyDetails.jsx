import { useLoaderData } from "react-router-dom";



const ToyDetails = () => {
    const details = useLoaderData();
    console.log(details);
    const { name, quantity, image, subCategory, toyName, price, rating, description } = details;
    return (
        <div>
            <h2 className="text-3xl font-bold text-center mt-16">Your Toy Details</h2>
            <div className="flex justify-center py-8 ">
                <div className="card lg:card-side bg-base-100 shadow-xl w-3/4">
                    <figure><img className="w-96" src={image} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Toy Name: {toyName}</h2>
                        <h2 className="card-title">Toy Price: {price}</h2>
                        <h2 className="card-title">Description: {description}</h2>
                        <h2 className="card-title">Seller Name: {name}</h2>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;