import { useLoaderData } from "react-router-dom";
import AllToysRow from "./AllToysRow";


const AllToys = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div className="overflow-x-auto w-full mt-10">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>IMAGE</th>
                        <th>TOY NAME</th>
                        <th>SELLER NAME</th>
                        <th>PRICE</th>
                        <th>QUANTITY</th>
                        <th>SUB-CATEGORY</th>
                        <th>DETAILS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(alltoys => <AllToysRow
                            key={alltoys._id}
                            alltoys={alltoys}
                        ></AllToysRow>)
                    }
                </tbody>
                {/* foot */}


            </table>
        </div>
    );
};

export default AllToys;