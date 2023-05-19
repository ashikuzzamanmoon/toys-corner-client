import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";
import "react-tooltip/dist/react-tooltip.css";
// import "./styles.css";
import { Tooltip as ReactTooltip } from "react-tooltip";


const Navbar = () => {

  const {user,logOut}=useContext(AuthContext);

    const navItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to='/allToys'>All Toys</Link></li>
        {
            user &&
            <li><Link to='/myToys'>My Toys</Link></li>

        }
        {
            user &&

        <li><Link to="/addtoys">Add Toys</Link></li>
        }
        <li><Link>Blogs</Link></li>
    </>
    return (
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                        {navItems}
                    </ul>
                </div>
                <Link to="/">
                    <div className="flex justify-center">
                        <img className="h-14 bg-base-200" src="https://i.ibb.co/WgQQyCt/logo.png" alt="" />
                    </div>
                    <p className="text-xl font-bold">Toys Corner</p>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
{
    user ?
    <div className=" flex items-center gap-5">
        <img id="title" src={user?.photoURL} className="w-9 h-8 rounded-full" alt="" />
        <ReactTooltip anchorId='title' content={user.displayName}  />
        <button className="btn btn-primary" onClick={logOut}>Logout</button>
    </div>
    :
<Link to='/login'>    <button className="btn btn-primary">Login</button></Link>


}
            </div>
        </div>
    );
};

export default Navbar;