//import React from 'react';
import LoginImg from '../materials/Loginimg.png';
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";


const Login = () => {
    return (
        <>
         <div className='flex m-3 p-2 mt-5'>
            <div>
                <img src={LoginImg} alt="welcome image" className='h-[24rem] w-[290px] rounded-[7px] ml-3 mr-12 ' />
            </div>

            <div className='mt-[0.5px] '>
            <h1 className='font-semibold font-Playfair text-[25px] '>Welcome back!</h1>

            <p className='font-Inter text-[14px] font-medium text-[#626262] mb-6 '>Login to continue</p>

            <p className='w-[420px] py-1 border-slate-300 border items-center flex justify-center mb-2 rounded-[4px] font-Inter font-medium text-[15px] '><FcGoogle size={21} className='inline  mr-3 ' /> Continue with google</p>

            <div className='w-[420px] h-[40px] border-slate-300 border items-center flex justify-center rounded-[4px] font-Inter font-medium text-[15px] '>
            <IoLogoApple size={30} className='inline pr-[10px]'/>
            <p className='mr-2 '>Continue with apple</p>
            </div>

            <p className='mt-6 mb-6 '>or</p>

            <form action="" className=''>

                <div>
                    <label htmlFor="Email" className='font-semibold'>Email/phone number </label>
                    <input type="email" className='form-input' />
                </div>

                <div>
                    <label htmlFor="password" className='font-semibold'> Password </label>
                    <input type="password" className='form-input' />
                </div>

                <p>Forgot password?</p>

                <button className='rounded-md text-white w-24 text-center bg-[#553700]'>Login</button>

            </form>
    
            </div>

         </div>   
        </>
    );
};

export default Login;
