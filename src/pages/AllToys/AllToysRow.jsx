import { Link } from "react-router-dom";


const AllToysRow = ({ alltoys }) => {
    const { _id, name, quantity, image, subCategory, toyName, price } = alltoys || {};
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
                    <button className="btn btn-secondary">View Details</button>
                </Link>
            </td>
        </tr>
    );
};

export default AllToysRow;