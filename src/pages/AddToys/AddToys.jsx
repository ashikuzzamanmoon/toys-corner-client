import { useForm } from "react-hook-form";

const AddToys = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it
    return (
        <div className="hero bg-red-100">

            <form className="" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="my-5 text-center text-3xl font-bold text-gray-600">Add Your Toys</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input className="bg-base-200 input input-bordered" defaultValue="test" {...register("example")} />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <label className="input-group">
                            <span>Email</span>
                            <input className="bg-base-200 input input-bordered" defaultValue="test" {...register("example")} />
                        </label>
                    </div>

                    <div className="form-control m-0 p-0">
                    <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <label className="input-group">
                            <span>Email</span>
                            <select className="select select-bordered w-[220px]">
                                <option disabled selected>Pick category</option>
                                <option>T-shirts</option>
                                <option>Mugs</option>
                                <option>Mugs</option>
                            </select>
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <label className="input-group">
                            <span>Email</span>
                            <input className="bg-base-200 input input-bordered" defaultValue="test" {...register("example")} />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <label className="input-group">
                            <span>Email</span>
                            <input className="bg-base-200 input input-bordered" defaultValue="test" {...register("example")} />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <label className="input-group">
                            <span>Email</span>
                            <input className="bg-base-200 input input-bordered" defaultValue="test" {...register("example")} />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <label className="input-group">
                            <span>Email</span>
                            <input className="bg-base-200 input input-bordered" defaultValue="test" {...register("example")} />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <label className="input-group">
                            <span>Email</span>
                            <input className="bg-base-200 input input-bordered" defaultValue="test" {...register("example")} />
                        </label>
                    </div>

                </div>

                <div className="form-control mt-5">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <label className="input-group">
                        <span>Email</span>
                        <input className="bg-base-200 input input-bordered w-full" defaultValue="test" {...register("example")} />
                    </label>
                </div>


                {/* <input className="bg-red-200" {...register("exampleRequired", { required: true })} />


                {errors.exampleRequired && <span>This field is required</span>} */}

                <input className="w-full btn btn-secondary my-10" type="submit" />
            </form>
        </div>
    );
};

export default AddToys;