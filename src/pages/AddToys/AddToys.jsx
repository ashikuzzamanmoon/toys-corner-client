import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";

const AddToys = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:5000/addToys',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
    }


   const {user}=useContext(AuthContext)
    return (
        <div className=" bg-red-100">

<form onSubmit={handleSubmit(onSubmit)}>
                    {errors.exampleRequired && <span>This field is required</span>}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <label className="input-group">
                                <span>Name</span>
                                <input className="input input-bordered w-full"

                                    {...register("name")}
                                    placeholder="user name"
                                    type="text"
                                    defaultValue={user?.displayName}

                                />



                            </label>
                        </div>



                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <label className="input-group">
                                <span>Email</span>
                                <input className="input input-bordered w-full"

                                    {...register("email", { required: true })}
                                    type="email"
                                    defaultValue={user?.email}


                                />



                            </label>
                        </div>



                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your SubCategory</span>
                            </label>
                            <label className="input-group">
                                <span>SubCategory</span>
                                <select {...register("subCategory")} className="input input-bordered w-full">
                                    <option value="truck">truck</option>
                                    <option value="sportsCar">sportsCar</option>
                                    <option value="policeCar">policeCar</option>
                                </select>
                            </label>
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <label className="input-group">
                                <span>Toy</span>
                                <input className="input input-bordered w-full"

                                    {...register("toyName", { required: true })}
                                    placeholder="Enter Toy Name"


                                />



                            </label>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoUrl</span>
                            </label>
                            <label className="input-group">
                                <span>Url</span>
                                <input className="input input-bordered w-full"

                                    {...register("image")}
                                    placeholder="photo url"
                                 
                                />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <span>Price</span>
                                <input className="input input-bordered w-full"

                                    {...register("price")}
                                    placeholder="price"
                                    type="number"
                                />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <span>Rating</span>
                                <input className="input input-bordered w-full"

                                    {...register("rating")}
                                    placeholder="rating"

                                />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <label className="input-group">
                                <span>Quantity</span>
                                <input className="input input-bordered w-full"

                                    {...register("quantity")}
                                    placeholder="quantity"

                                />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <label className="input-group">
                                <span>Description</span>
                                <input className="input input-bordered w-full"

                                    {...register("description")}
                                    placeholder="description"

                                />
                            </label>
                        </div>
                    </div>
                    <div className="flex justify-center mt-7">

                        <button className="btn btn-secondary" >
                            <input className="submit-btn" value="Add Toy" type="submit" />

                        </button>
                    </div>
                </form>
        </div>
    );
};

export default AddToys;