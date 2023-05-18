import { Link } from "react-router-dom";


const Login = () => {
    const handleLogin = event =>{
        event.preventDefault();
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="w-1/2 mr-8">
                    <img className="" src="https://i.ibb.co/82QdkVX/login-Photo.png" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className="text-2xl text-center font-bold">Please Login</h2>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-secondary" type="submit" value="Login" />
                            </div>
                        </form>
                        <div className='text-center'>
                    <p className='text-center fw-semibold mt-4'> Or Sign in with</p>
                    <hr className="my-3" />
                </div>
                <div className='flex justify-center items-center'>
                    <div>
                        <button className="font-semibold flex items-center gap-2 text-xl btn btn-outline btn-secondary"> <img src="https://i.ibb.co/3T5SxcN/google.png" style={{ height: "18px" }} alt="" /> Google</button>
                    </div>
                </div>
                <div className='text-center mt-3'>
                    <p className='font-semibold'>Do not have an account? Please <Link to="/register">Register</Link> </p>
                </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;