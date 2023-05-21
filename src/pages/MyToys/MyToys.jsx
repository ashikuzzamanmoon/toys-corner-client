import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToysRow from "./MyToysRow";
import useTitle from "../../hook/useTitle";
import Swal from "sweetalert2";


const MyToys = () => {
    useTitle('MyToys')
    const { user } = useContext(AuthContext)
    const [toys, SetToys] = useState();
    useEffect(() => {
        fetch(`http://localhost:5000/addToys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                SetToys(data)
            })
    }, [user])

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/myToys/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = toys.filter(toy => toy._id !== id);
                            SetToys(remaining)
                        }
                    })
            }
        })

    }



    return (
        <div className="overflow-x-auto w-full mt-12">
            <h2 className="text-3xl text-center font-bold py-4">Your Toys Collection</h2>
            <table className="table w-full">
                <thead>
                    <tr>

                        <th>DELETE</th>
                        <th>Image</th>
                        <th>TOY NAME</th>
                        <th>PRICE</th>
                        <th>UPDATE</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        toys?.map(toy => <MyToysRow
                            key={toy._id}
                            toy={toy}
                            handleDelete={handleDelete}

                        ></MyToysRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;