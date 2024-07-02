import { useState } from 'react';
import ForgotPwdImg from '../materials/fgtpwd2img.png';
import { Link } from 'react-router-dom';

const ForgotPwd = () => {
    const [showDialog, setShowDialog] = useState(false);

    const handleContinueClick = () => {
        setShowDialog(true);
    };

    const closeModal = () => {
        setShowDialog(false);
    };

    return (
        <>
            <div className="w-full text-center">
                <h1 className="text-[38px] font-medium font-Playfair mt-11 mb-2">Forgot Password</h1>
                <p className="text-[#828282] mb-8 font-normal font-Inter">Please enter the email address linked to this account</p>

                <form onSubmit={(e) => e.preventDefault()}>
                    <div className='mb-4'>
                        <label htmlFor="email" className='font-medium block font-Inter mb-2 mr-[390px] mobile:mr-[345px] mobile:font-semibold '>Email address</label>
                        <input type="text" id="email" className='border-neutral-400 pl-2 py-3 border rounded-md w-[450px] mr-12 font-Lato mb-10 mobile:ml-0 mobile:w-[400px] mobile:mr-14' placeholder='Enter your email or phone number' />
                    </div>

                    <button type="button" className="rounded-md text-white w-[450px] py-3 mr-12 text-center bg-[#805300] mb-5 mobile:w-[400px] mobile:mb-1" onClick={handleContinueClick}>Continue</button>
                </form>

                <div className='mr-[220px] font-Inter mobile:mr-[180px] '>
                    <p className="inline text-[#3b3b3b] font-medium text-[16px] tracking-wider mobile:tracking-wide mobile:text-[14px] ">Remember your password? </p>
                    <Link to="/login">
                        <p className="text-[#D58A00] cursor-pointer inline font-bold text-[18px] mobile:text-[16px]">Login</p>
                    </Link>
                </div>
            </div>


            {showDialog && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out">
                    <div className="bg-white p-8 rounded-md shadow-md text-center transform transition-all duration-300 ease-in-out scale-95">
                        <h1 className="text-[38px] font-normal font-Playfair mt-11 mb-10">Password Recovery</h1>
                        <img src={ForgotPwdImg} alt="Password Recovery" className='mx-auto mb-14' />
                        <p className="text-[#626262] text-[20px] font-normal font-Inter">A link has been sent to your email address</p>
            
                        <button className="mt-6 px-4 mb-4 py-2 bg-[#805300] text-white rounded-md block mx-auto hover:-translate-y-1 hover:scale-110 hover:w-24 hover:rounded-xl duration-300" onClick={closeModal}>Close</button>

                        <Link to="/resetpwd">
                        <button className='bg-black text-white px-4 py-2 rounded-md'>Click</button>
                        </Link>

                    </div>

                </div>
            )}
        </>
    );
};

export default ForgotPwd;

