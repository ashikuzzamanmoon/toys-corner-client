import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";


const AllToysRow = ({ alltoys }) => {
    const { _id, name, quantity, image, subCategory, toyName, price } = alltoys || {};
    const {user}=useContext(AuthContext)
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
        <tr>
            <td>
                <div className="">
                    <div className="avatar">
                        <div className="mask mask-squircle w-16 h-16">
                            <img src={image} alt="" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {toyName}
            </td>
            <td>{name}</td>
            <td>
                $ {price}
            </td>
            <td>
                {quantity}
            </td>
            <td>
                {subCategory}
            </td>
            <td>
                <Link to={`/details/${_id}`}>
                    <button onClick={handleDetails} className="btn btn-secondary">View Details</button>
                </Link>
            </td>
        </tr>
    );
};

export default AllToysRow;