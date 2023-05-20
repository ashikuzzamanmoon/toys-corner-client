

const AllToysRow = ({ alltoys }) => {
    const { _id, name, quantity, image, subCategory, toyName, price } = alltoys;
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {image}
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {toyName}
            </td>
            <td>{name}</td>
            <th>
                {price}
            </th>
            <th>
                {quantity}
            </th>
            <th>
                {subCategory}
            </th>
            <th>
                <button className="btn btn-secondary">View Details</button>
            </th>
        </tr>
    );
};

export default AllToysRow;