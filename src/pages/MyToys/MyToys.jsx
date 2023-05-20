import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToysRow from "./MyToysRow";


const MyToys = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    const [toys, SetToys] = useState();
    useEffect(() => {
        fetch(`http://localhost:5000/addToys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                SetToys(data)
            })
    }, [user])
    return (
        <div className="overflow-x-auto w-full mt-12">
            <h2 className="text-3xl text-center font-bold py-4">Your Toys Collection</h2>
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        {/* <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th> */}
                        <th>DELETE</th>
                        <th>Image</th>
                        <th>TOY NAME</th>
                        <th>PRICE</th>
                        <th>UPDATE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        
                        toys?.map(toy => <MyToysRow key={toy._id} toy={toy}></MyToysRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;