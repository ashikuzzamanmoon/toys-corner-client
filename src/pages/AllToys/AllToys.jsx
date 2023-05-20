import { useLoaderData } from "react-router-dom";
import AllToysRow from "./AllToysRow";
import useTitle from "../../hook/useTitle";


const AllToys = () => {
    useTitle('AllToys')
    const data = useLoaderData();
    return (
        <div className="overflow-x-auto w-full mt-12">
            <h2 className="text-3xl text-center font-bold py-4">Collection of Toys</h2>
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

            </table>
        </div>
    );
};

export default AllToys;