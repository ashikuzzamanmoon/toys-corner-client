import { useLoaderData } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import useTitle from "../../hook/useTitle";



const ToyDetails = () => {
    useTitle('ToyDetails')
    const details = useLoaderData();
    console.log(details);
    const { name, quantity, image, toyName, price, rating, description, email } = details;
    return (
        <div className="bg-red-50 p-6">
            <h2 className="text-3xl font-bold text-center mt-12">Your Toy Details</h2>
            <div className="flex justify-center py-8 ">
                <div className="card lg:card-side bg-base-100 shadow-xl w-3/4 h-auto">
                    <figure><img className="w-1/2" src={image} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Toy Name: {toyName}</h2>
                        <h2 className="card-title">Toy Price: $ {price}</h2>
                        <h2 className="card-title">Quantity: {quantity}</h2>
                        <h2 className="card-title">Description: {description}</h2>
                        <h2 className="card-title">Seller Name: {name}</h2>
                        <h2 className="card-title">Seller Email: {email}</h2>
                        <h2 className="card-title">Rating: <Rating
                            style={{ maxWidth: 100 }}
                            value={rating}
                              readOnly
                        /> {rating}</h2>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;