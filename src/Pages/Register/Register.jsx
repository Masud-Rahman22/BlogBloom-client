import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";
import { updateProfile } from "firebase/auth";
import auth from "../../Config/firebase.config";

const Register = () => {
    const { googleLogin, register } = useContext(AuthContext)
    const handleToGoogleLogin = () => {
        googleLogin()
            .then(() => {
                swal("Welcome", "", "success")
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const handleToRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        if (!/^(?=.*[A-Z])(?=.*?[0-9])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~])[A-Za-z!@#$%^&*()_+{}[\]:;<>,.?~0-9]{6,}$/.test(password)){
            swal("wrong", "password must be at least 6 characters long with one uppercase letter and one special character", "warning");
            return;
        }
        console.log(email,password);
        register(email, password)
            .then(() => {
                swal("Great", "You are a registered member now", "success");
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                }).then(() => {
                    console.log('profile updated');
                }).catch((error) => {
                    console.log(error);
                });
            })
            .catch()
    }
    return (
        <div className="lg:w-2/4 mx-auto">
            <div className="text-center">
                <h1 className="text-3xl font-semibold text-black mt-5">Register</h1>
            </div>
            <form onSubmit={handleToRegister} className="p-10 w-3/4 md:w-2/3 mx-auto">
                <input className="border-b-2 font-bold text-sm w-full mt-10 p-2" type="text" name="name" id="" placeholder="First Name" required />
                <input className="border-b-2 font-bold text-sm w-full mt-10 p-2" type="text" name="name" id="" placeholder="Last Name" required />
                <input className="border-b-2 font-bold text-sm w-full mt-10 p-2" type="text" name="photo" id="" placeholder="Photo URL" required />
                <input className="border-b-2 font-bold text-sm w-full mt-10 p-2" type="email" name="email" id="" placeholder="Enter Your Email" required />
                <input className="border-b-2 font-bold text-sm w-full mt-10 p-2" type="password" name="password" id="" placeholder="Password" required />
                <input className="border-b-2 font-bold text-sm w-full mt-10 p-2" type="password" name="password" id="" placeholder="Confirm Password" required />
                <button className=" bg-blue-500 text-white w-full mt-10 rounded-full p-3">Register</button>
            </form>
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center gap-3">
                    <p className="font-bold text-blue-500">Or you can sign up using</p>
                    <button onClick={handleToGoogleLogin}><FcGoogle className="w-full h-[50px]"></FcGoogle></button>
                </div>
            </div>
            <p className="text-center text-black mt-28">Already have an account? <Link to="/login" className="underline text-blue-500 text-sm font-bold">Login</Link></p>
        </div>
    );
};

export default Register;