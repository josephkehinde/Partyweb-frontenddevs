// import React from 'react;'
import SignupImg from '../materials/Signupimg.png'
import { FcGoogle } from "react-icons/fc";
import { FaRegEyeSlash } from "react-icons/fa";


const Signup = () => {
    return (
    <>
        <div className = 'flex m- p-2 mt-4 w-[100%]'>
            <div>
                <img src={SignupImg} alt="Signup image" className='h-[34rem] w-[420px] ml-3 mr-12 ' />
            </div>

            <div className='mt-[0.5px] m-5'>
            <h1 className='font-semibold font-Playfair text-[25px] '>Create an account</h1>

            <p className='font-Inter text-[14px] font-medium text-[#626262] mb-6 '>Let's get you started</p>
            
            <form action="" className='font-playfair'>
                
                <div>
                    <label htmlFor="name" className='font-semibold'>Name </label>
                    <input type="text" placeholder='Enter your full name' className='w-[420px] h-[40px] my-3 px-3 border-slate-300 border flex text-[13px] ' />
                </div>

                <div>
                    <label htmlFor="Email" className='font-semibold'>Email/phone number </label>
                    <input type="email" placeholder='Enter your email or phone' className='w-[420px] h-[40px] my-3 px-3 border-slate-300 border flex text-[13px]'/>
                </div>

                <div>
                    <label htmlFor="password" className='font-semibold '> Password </label>
                    <input type="password" placeholder='Enter your password' className='w-[420px] h-[40px] my-3 px-3 border-slate-300 border flex text-[13px] '/>
                    <FaRegEyeSlash className='abslute '/>
                </div>

                <div><label><input type='checkbox' className=''/> I agree to the <a href='#'>terms and policy</a></label>
                </div>

                <button className='rounded-md text-white w-[420px] h-[40px] my-3 text-center bg-[#553700]'>Login</button>

            </form>
            <p className='text-xs flex justify-center'>Have an account? <a href='#' >Login</a></p>
            <div className='flex'>
            <hr className='my-5 w-[203px]'/>
            <span className='mt-1 '>or</span>
            <hr className='my-5 w-[203px] '/>
            </div>

            <button className='w-[420px] h-[40px] my-5 border-slate-300 border items-center flex justify-center rounded-[4px] font-Inter font-medium text-[15px] '>
            <FcGoogle size={30} className='inline pr-[10px]'/>
            <p className='mr-2 '>Signup with Google</p>
            </button>
            </div>
        </div>
    </>
    )
}

export default Signup;