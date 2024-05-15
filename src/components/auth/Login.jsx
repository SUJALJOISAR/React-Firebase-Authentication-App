import {React,useState} from 'react';
import IMG from '../photos/login_image.png';
import { Eye } from 'react-bootstrap-icons';
import { Link,useNavigate } from 'react-router-dom';
import IMG2 from '../photos/back_arrow.png'; 
import {toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';

const Login = () => {
    const [email,setEmail] =useState("");
    const [password,setPassword]=useState("");

    const navigate= useNavigate();

    const handleSubmit =async (e)=>{
        e.preventDefault();
        try{
            await signInWithEmailAndPassword(auth,email,password);
            console.log("User Logged In Successfully");
            toast.success("User Logged In Successfully",{
                    position:"top-center",
                    autoClose:8000,
                    pauseOnHover:true,
                    draggable:true,
                    theme:"dark",
            });
            navigate("/");
        }catch(error){
            console.log(error.message);
            toast.error(error.message,{
                position:"top-center",
                autoClose:8000,
                pauseOnHover:true,
                draggable:true,
                theme:"dark",
            });
        }
    }

  return (
    <>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          <div className="md:w-1/2 px-16">
            <div className="flex items-center mb-4">
            <Link to="/">
                <img src={IMG2} alt="Back" className="w-6 h-6 mr-2" />
            </Link>
              <h2 className="font-bold text-2xl text-[#BB69C8]">Login</h2>
            </div>
            <p className="text-md mt-4">Please Login</p>
            <form action="" className='flex flex-col gap-4' onSubmit={handleSubmit}>
              <input className="p-2 mt-8 rounded-xl border" type="text" name="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} required/>
              <div className="relative">
                <input className="p-2 rounded-xl border w-full" type="password" name="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} required/>
                <Eye className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-600"/>
              </div>
              <button className="bg-[#BB69C8] rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
            </form>

            <div className="mt-8 grid grid-cols-3 items-center text-gray-400">
              <hr className="text-gray-400"/>
              <p className="text-center text-md">OR</p>
              <hr className="text-gray-400"/>
            </div>

            <button className="bg-white border py-2 w-full rounded-xl mt-3 flex justify-center items-center text-md hover:scale-105 duration-300">
            <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="25px" viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
              </svg>Login With Google</button>

            <p className="text-sm border-b border-gray-400 py-4 px-5">Forgot Password?</p>
            <div className="mt-3 text-sm flex justify-between items-center">
              <p>Don't have an Account?</p>
              <Link to='/register'><button className="py-2 px-3 bg-white border rounded-xl hover:scale-110 duration-300">Register</button></Link>
            </div>
          </div>
          <div className="md:block hidden w-1/2">
            <img className="rounded-2xl py-12" src={IMG} alt="login_image" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
