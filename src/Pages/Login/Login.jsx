// import login from './Login.css'

import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const {googleLogin,Login} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const handleToGoogleLogin = ()=>{
        googleLogin()
        .then(()=>{
            swal("Welcome", "", "success")
            navigate(location?.state ? location?.state : '/')
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    const handleToLogin = e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        Login(email,password)
        .then(()=>{
            swal("Welcome", "You are Logged in", "success");
            navigate(location?.state ? location.state : '/')
        })
        .catch((error)=>{
            if (error.code === 'auth/invalid-login-credentials') {
                swal("Wrong", "Invalid Login Credentials", "warning");
                return;
            }
        })
    }
    return (
            <div className="lg:w-2/4 mx-auto">
                <div className="text-center">
                    <h1 className="text-3xl font-semibold text-black mt-5">Login</h1>         
                </div>
                <form onSubmit={handleToLogin} className="p-10 w-3/4 md:w-2/3 mx-auto">
                    <input className="border-b-2 font-bold text-sm w-full mt-10 p-2" type="email" name="email" id="" placeholder="Enter Your Email" required />
                    <input className="border-b-2 font-bold text-sm w-full mt-10 p-2" type="password" name="password" id="" placeholder="Password" required />
                    <button className="bg-blue-500 text-white w-full mt-10 rounded-full p-3">Login</button>
                </form>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-center gap-3">
                        <p className="font-bold text-blue-500">Or you can sign up using</p>
                        <button onClick={handleToGoogleLogin}><FcGoogle className="w-full h-[50px]"></FcGoogle></button>
                    </div>
                </div>
                <p className="text-center text-black mt-28">Or you can sign up with? <Link to="/register" className="underline text-blue-500 text-sm font-bold">Register</Link></p>
            </div>
    );
};

export default Login;
