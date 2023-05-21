import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../../../../providers/AuthProvider";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ToyCard = ({ toyDetails }) => {
    const { _id, image, toyName, price, ratings } = toyDetails;
    const { user } = useContext(AuthContext);
    
    const handleDetails = () => {
        {
            if (!user) {
                Swal.fire({
                    title: 'Warning!',
                    text: 'Your have to log in first to view details',
                    icon: 'warning',
                    confirmButtonText: 'OK'
                })
                
            }
        }
    }
    
    return (
        <div className="card w-96 bg-base-200 shadow-xl ">
            <figure><img src={image} className="h-[280px] w-[280px] mt-5 rounded-lg" /></figure>
            <div className="card-body">
                <div>
                    <h2 className="card-title">Toy Name: {toyName}</h2>
                    <p className="text-xl">Price: ${price}</p>
                    <div className="flex items-center gap-3">
                        <span className="text-xl">Ratting:</span>
                        <Rating
                            className=""
                            style={{ maxWidth: 100 }}
                            value={ratings}
                            readOnly
                        /> {ratings}
                    </div>
                </div>
                <div>
                    <Link to={`details/${_id}`}><button onClick={handleDetails} className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;