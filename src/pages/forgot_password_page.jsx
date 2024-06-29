//import React from 'react';

const ForgotPwd = () => {
    return (
        <>

         <div className="w-full items-center">
            <h1 className="text-[24px] font-black">Forgot Password</h1>
            <p>Please enter the email address linked to this account</p>

            <form action="">
            <div>
                    <label htmlFor="Email" className='font-semibold block'>Email address </label>
                    <input type="email" className='form-input' />
                </div>

                <button className="rounded-md text-white w-24 text-center bg-[#553700]">Continue</button>
                <p>Remember your password?</p>
                <p className="text-red-600">Login</p>
            </form>
         </div>   
        </>
    );
};

export default ForgotPwd;
