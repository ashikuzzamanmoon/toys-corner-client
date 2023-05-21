import { useForm } from "react-hook-form";
import useTitle from "../../hook/useTitle";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
    useTitle('UpdatePage')
    const info=useLoaderData();
    const {_id}=info
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
       fetch(`http://localhost:5000/mytoys/${_id}`,{
        method:"PATCH",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
       })
       .then(res=>res.json())
       .then(details=>
        {
            console.log(details)
            if(details.modifiedCount>0)
            {
                Swal.fire({
                    title: 'Success!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
            
        }
        )

    };
    return (
        <div className=" mb-12 mt-10 ">
           

            <form onSubmit={handleSubmit(onSubmit)} className="p-5 w-[450px] h-[500px] rounded-lg mx-auto">
                {errors.exampleRequired && <span>This field is required</span>}
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 gap-10">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">

                                <input className="input input-bordered w-80 "

                                    {...register("price")}
                                
                                    type="text"


                                />



                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <label className="input-group">

                                <input className="input input-bordered w-80"

                                    {...register("quantity")}
                                  
                                    type="text"


                                />



                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <label className="input-group">

                                <input className="input input-bordered w-80"

                                    {...register("description")}
                                    
                                    type="text"


                                />



                            </label>
                        </div>

                    </div>
                </div>
                <div className="flex justify-center mt-7">

                    <button className="btn btn-secondary" >
                        <input className="btn btn-secondary" value="Update" type="submit" />

                    </button>
                </div>
            </form>

        </div>
    );
};

export default Update;