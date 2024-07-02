import { useState } from 'react';
import LoginImg from '../materials/Loginimg.png';
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";
import { BiHide,BiShow } from "react-icons/bi";
import { Link } from 'react-router-dom';



const Login = () => {
    
        // State to handle the password open/close status
        const [hidePwd, setHidePwd] = useState(true);
    
        // Function to toggle the navbar's visibility
        const TogglePwd = () => {
            setHidePwd(!hidePwd);
        };

    return (
        <>
                    
        <main className='w-full'>

         <div className='flex gap-7 my-3 pl-4 pb-2 mt-10 w-full h-full below-sm:mt-12 below-sm:gap-0 below-sm:mr-0 mobile:ml-0 mb-1 '>
         {/* <div className='flex space-x-0.5 m-3 p-2 mt-5'> */}
            <div>
                <img src={LoginImg} alt="welcome image" className='h-full w-[370px] rounded-[7px] ml-3 mr-12 below-sm:w-[80%] below-sm:ml-1 below-sm:mr-0 mobile:w-[87%] ' />
            </div>

            <div className='mt-[0.5px] below-sm:mr-14 below-sm:mt-0 mobile:w-[80%] mobile:mr-0 '>
            <h1 className='font-semibold font-Playfair text-[25px] '>Welcome back!</h1>

            <p className='font-Inter text-[14px] font-medium text-[#626262] mb-6 '>Login to continue</p>

            <button className='w-[500px] py-3 border-gray-300 border-2 items-center flex justify-center mb-3 rounded-md font-Inter font-medium text-[15px] cursor-pointer below-sm:w-[220px] below-sm:rounded-xl below-sm:font-semibold mobile:w-[210px] '><FcGoogle size={21} className='inline mr-3' />Continue with google
            </button>

            <button className='w-[500px] py-2 border-neutral-500 border items-center flex justify-center rounded-md font-Inter font-medium text-[15px] mb-7 below-sm:w-[220px] below-sm:rounded-xl below-sm:font-semibold mobile:w-[210px] '>
            <IoLogoApple size={30} className='inline pr-[6px]'/>
            <p className='mr-2 pl-2 '>Continue with apple</p>
            </button>

            <div className="flex items-center my-5 below-sm:w-full mobile:w-[95%]">
            <hr className="flex-grow border-t border-gray-300 " />
            <span className="mx-[3px] text-gray-500 mb-[3px] below-sm:text-gray-800 ">or</span>
            <hr className="flex-grow border-t border-gray-300 " />
          </div>

          <form action="" className='font-Inter'>
              <div className='mb-3'>
                <label htmlFor="email" className='font-medium block  mb-2'>Email/phone number</label>
                <input type="text" id="email" className='border-neutral-400 pl-2 py-3 border rounded w-[500px] font-Lato mb-1 below-sm:w-[230px] below-sm:text-[14px] below-sm:rounded-lg mobile:w-[214px] mobile:pl-0.5 ' placeholder='Enter your email or phone number' />
              </div>       

                <div className='mb-2 relative'>
                    <label htmlFor="loginpwd" className='font-medium block mb-2'> Password </label>
                    <input type={hidePwd ? 'password' : 'text'} id="loginpwd" className='border-neutral-400 pl-2 py-[10px] border rounded w-[500px] font-Lato below-sm:w-[230px] below-sm:rounded-lg mobile:w-[210px] ' placeholder='Enter your password' /> 
                    
                    <div onClick={TogglePwd}>
                    {/* Toggle between open and close icons based on hidePwd state */}
                    {!hidePwd ? <BiShow size={24} style={{ color: 'grey' }} className='absolute top-11 right-5 cursor-pointer below-sm:right-2 mobile:right-3 '/> : <BiHide size={24} style={{ color: 'grey' }} className='absolute top-11 right-5 cursor-pointer below-sm:right-2 mobile:right-3 '/>}
                    </div>
                </div>

                <Link to="/forgot-pwd">
                <p className='text-left text-black mb-14 cursor-pointer font-Inter font-semibold text-[13px] below-sm:mb-10 '>Forgot password?</p>
                </Link>

                <button type="submit" className='rounded-md text-white w-[500px] py-2 pt-4 text-center bg-[#805300] below-sm:w-[230px] below-sm:pt-2 mobile:w-[210px]'>Login</button>
                <div className='items-center text-[13px] ml-40 mt-2 font-Inter font-medium below-sm:ml-2 mobile:ml-1 '>
                    <p className='inline pr-0.5'>Don&apos;t have an account?</p>
                    <p className='inline cursor-pointer'>Sign up</p>
                </div>
                
                
            </form>
    
            </div>

         </div> 

         </main>  
        </>
    );
};

export default Login;
