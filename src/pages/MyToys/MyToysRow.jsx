import { Link } from "react-router-dom";


const MyToysRow = ({ toy, handleDelete }) => {
    const { _id, image, toyName, price } = toy;

    return (
        <tr className="">
            <td>
                <button onClick={()=> handleDelete(_id) } className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-16 h-16">
                        <img src={image} alt="" />
                    </div>
                </div>
            </td>
            <td>
                {toyName}
            </td>
            <td>
                $ {price}
            </td>
            <td>
               <Link to={`/updateToy/${_id}`}> <button className="btn btn-outline btn-secondary">Update</button></Link>
            </td>
        </tr>
    );
};

export default MyToysRow;