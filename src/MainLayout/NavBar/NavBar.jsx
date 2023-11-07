import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Button, Navbar } from 'flowbite-react';
const NavBar = () => {
    const { Logout, user } = useContext(AuthContext)
    const Links = <>
        <li className="text-black lg:mr-2"><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold bg-blue-500 p-1 md:p-3 rounded-lg" : ""
            }
        >
            Home
        </NavLink></li>
        <li className="text-black lg:mr-2"><NavLink
            to="/addBlog"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold bg-blue-500 p-1 md:p-3 rounded-lg" : ""
            }
        >
            Add Blog
        </NavLink></li>
        <li className="text-black lg:mr-2"><NavLink
            to="/allBlogs"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold bg-blue-500 p-1 md:p-3 rounded-lg" : ""
            }
        >
            All Blogs
        </NavLink></li>
        <li className="text-black lg:mr-2"><NavLink
            to="/featuredBlogs"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold bg-blue-500 p-1 md:p-3 rounded-lg" : ""
            }
        >
            Featured Blogs
        </NavLink></li>
        <li className="text-black lg:mr-2"><NavLink
            to="/wishlist"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold bg-blue-500 p-1 md:p-3 rounded-lg" : ""
            }
        >
            Wishlist
        </NavLink></li>
        {
            user ? ""
                :
                <div className="flex">
                    <li className="text-black lg:mr-5"><NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold bg-blue-500 p-1 md:p-3 rounded-lg" : ""
                        }
                    >
                        Login
                    </NavLink></li>
                    <li className="text-black"><NavLink
                        to="/register"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold bg-blue-500 p-1 md:p-3 rounded-lg" : ""
                        }
                    >
                        Register
                    </NavLink></li>
                </div>
        }
    </>
    const handleToLogout = () => {
        Logout()
            .then()
            .catch()
    }
    return (
        <Navbar fluid rounded>
            <Navbar.Brand href="https://flowbite-react.com">
                <img className="w-[110px] h-[110px] -mt-5" src="/public/logo.png" alt="" />
            </Navbar.Brand>
            <div className=" flex md:order-2">
                {
                    user && <div className="flex items-center gap-3">
                        <p>{user.displayName}</p>
                        <div className="w-10 rounded-full navbar-end">
                            <img className="rounded-full" src={user?.photoURL} />
                        </div>
                        <Button onClick={handleToLogout} className="btn bg-blue-500 text-white border-none">Logout</Button>
                    </div>
                }
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                {Links}
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
// {
//     user && <div className="navbar-end gap-2">
//         <p>{user.displayName}</p>
//         <div className="w-10 rounded-full navbar-end">
//             <img className="rounded-full" src={user?.photoURL} />
//         </div>
//         <button onClick={handleToLogout} className="btn bg-blue-500 text-white border-none">Logout</button>
//     </div>
// }