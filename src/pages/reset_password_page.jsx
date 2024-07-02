// //import React from 'react';
// import { Link } from "react-router-dom";

// const ResetPwd = () => {
//     return (
//         <>

//          <div className="w-full text-center">
//             <h1 className="text-[38px] font-medium font-Playfair mt-11 mb-2">Reset Password</h1>
//             <p className="text-[#828282] mb-8 font-normal font-Inter ">Please enter the your new password</p>

//             <form action="">
            // <div className='mb-4'>
            //     <label htmlFor="resetpwd" className='font-medium block font-Lato  mb-2 mr-[400px]'>New password</label>
            //     <input type="password" id="resetpwd" className='border-neutral-400 pl-2 py-3 border rounded-md w-[450px] mr-12 font-Lato mb-10' />
            //   </div>

            // <div className='mb-4'>
            //     <label htmlFor="confirmresetpwd" className='font-medium block font-Lato  mb-2 mr-[370px]'>Confirm password</label>
//                 <input type="password" id="confirmresetpwd" className='border-neutral-400 pl-2 py-3 border rounded-md w-[450px] mr-12 font-Lato mb-10' />
//               </div>

            //   <Link to="/pwd-recovered">
            //         <button type="submit" className="rounded-md text-white w-[450px] py-3 mr-12 text-center bg-[#805300] mb-5">Update password</button>
            //     </Link>
//             </form>
//          </div>   
//         </>
//     );
// };

// export default ResetPwd;

import { useState } from 'react';
import { Link } from "react-router-dom";

const ResetPwd = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value !== newPassword) {
            setError('Passwords do not match.');
        } else {
            setError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPassword === confirmPassword) {
            // Redirect to password recovered page or perform other actions
        }
    };

    return (
        <div className="w-full text-center mobile:">
            <h1 className="text-[38px] font-medium font-Playfair mt-11 mb-2">Reset Password</h1>
            <p className="text-[#828282] mb-10 font-normal font-Inter">Please enter your new password</p>

            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                <label htmlFor="resetpwd" className='font-medium block font-Lato  mb-2 mr-[400px] mobile:mr-[350px]'>New password</label>
                    <input
                        type="password"
                        id="resetpwd"
                        value={newPassword}
                        onChange={handleNewPasswordChange}
                        className='border-neutral-400 pl-2 py-3 border rounded-md w-[450px] mr-12 font-Lato mobile:mr-[80px] mobile:w-[380px] '
                    />
                </div>

                <div className='mb-16'>
                    <label htmlFor="confirmresetpwd" className='font-medium block font-Lato mb-2 mr-[370px] mobile:mr-[330px]'>Confirm password</label>
                    <input
                        type="password"
                        id="confirmresetpwd"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        className='border-neutral-400 pl-2 py-3 border rounded-md w-[450px] mr-12 font-Lato mobile:mr-[80px] mobile:w-[380px]'
                    />
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                </div>

                <Link to="/pwd-recovered">
                    <button type="submit" className="rounded-md text-white w-[410px] py-3 mr-20 text-center bg-[#805300] mb-5 mobile:w-[350px] mobile:mx-auto">Update password</button>
                </Link>
            </form>
        </div>
    );
};

export default ResetPwd;

