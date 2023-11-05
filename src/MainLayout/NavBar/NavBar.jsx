import { NavLink } from "react-router-dom";
const NavBar = () => {
    const Links = <>
        <li className="text-black lg:mr-2"><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold bg-blue-500" : ""
            }
        >
            Home
        </NavLink></li>
        <li className="text-black lg:mr-2"><NavLink
            to="/addBlog"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold bg-blue-500" : ""
            }
        >
            Add Blog
        </NavLink></li>
        <li className="text-black lg:mr-2"><NavLink
            to="/allBlogs"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold bg-blue-500" : ""
            }
        >
            All Blogs
        </NavLink></li>
        <li className="text-black lg:mr-2"><NavLink
            to="/featuredBlogs"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold bg-blue-500" : ""
            }
        >
            Featured Blogs
        </NavLink></li>
        <li className="text-black lg:mr-2"><NavLink
            to="/wishlist"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold bg-blue-500" : ""
            }
        >
            Wishlist
        </NavLink></li>
        <li className="text-black lg:mr-2"><NavLink
            to="/login"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold bg-blue-500" : ""
            }
        >
            Login
        </NavLink></li>
        <li className="text-black"><NavLink
            to="/register"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold bg-blue-500" : ""
            }
        >
            Register
        </NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {Links}
                    </ul>
                </div>
                <img className="w-[110px] h-[110px]" src="/public/logo.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Log Out</a>
            </div>
        </div>
    );
};

export default NavBar;