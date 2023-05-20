

const Update = () => {
    return (
        <div className=" mb-12 mt-10 ">
            <h1 className="text-center text-4xl font-bold mb-8">Update Your Toys</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="px-5 py-5 border bg-red-100 shadow-lg w-[450px] h-[500px] rounded-lg mx-auto">
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
                                    placeholder="user name"
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
                                    placeholder="user name"
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
                                    placeholder="user name"
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