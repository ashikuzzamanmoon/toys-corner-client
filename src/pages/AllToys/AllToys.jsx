import { useLoaderData } from "react-router-dom";


const AllToys = () => {
    const data=useLoaderData()
    console.log(data);
    return (
        <div>
            <h1>Rabbi</h1>
        </div>
    );
};

export default AllToys;