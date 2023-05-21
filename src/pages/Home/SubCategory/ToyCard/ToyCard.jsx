import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../../../../providers/AuthProvider";

const ToyCard = ({ toyDetails }) => {
    const { _id, image, toyName, price, ratings } = toyDetails;
    const { user } = useContext(AuthContext);

    const handleDetails = () =>{
        {
            if(!user){
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
        <div className="card w-96 bg-base-200 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <div>
                    <h2 className="card-title">Toy Name: {toyName}</h2>
                    <p className="text-xl">Price: ${price}</p>
                    <p>Rating: {ratings}</p>
                </div>
                <div>
                    <Link to={`details/${_id}`}><button onClick={handleDetails} className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;