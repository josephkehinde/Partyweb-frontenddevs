import ForgotPwdImg from '../materials/fgtpwd2img.png'
import { Link } from 'react-router-dom';

const PwdRecovery = () => {
    return (
        <>
        <div className="w-full text-center">

         <h1 className="text-[38px] font-normal font-Playfair mt-11 mb-10">Password Recovery</h1>
         <img src={ForgotPwdImg} alt="Password Recovery" className='mx-auto mb-14' />

         <p className="text-[#626262] text-[20px] font-normal font-Inter ">A link has been sent to your email address</p> 

         </div>  

         <Link to="resetpwd">
         <button className='inline bg-black text-white '>Click</button>
         </Link>
         
        </>
    );
};

export default PwdRecovery;
