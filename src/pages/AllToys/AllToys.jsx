import AllToysRow from "./AllToysRow";
import useTitle from "../../hook/useTitle";
import { useEffect, useState } from "react";


const AllToys = () => {
    const [text,setText]=useState();
    const [toys,setToys]=useState();
    useTitle('AllToys')
         
useEffect(()=>{
    fetch('http://localhost:5000/addToys')
    .then(res=>res.json())
    .then(data=>setToys(data))
},[])

    const handleSearch=()=>{
        fetch(`http://localhost:5000/toys/${text}`)
        .then(res=>res.json())
        .then(data=>setToys(data))

    }

    return (
        <div className="overflow-x-auto w-full mt-12">
               <div className="form-control">
                <div className="input-group">
                    <input type="text" onChange={(e)=>setText(e.target.value)} placeholder="Search…" className="input input-bordered" />
                    <button onClick={handleSearch} className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
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
                        toys?.map(alltoys => <AllToysRow
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