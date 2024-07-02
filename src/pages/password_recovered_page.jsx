import ResetPwdImg from '../materials/fgtpwd3img.png';
import { Link } from 'react-router-dom';

const PwdRecovered = () => {
    return (
        <>
        <div className="w-full text-center">

         <h1 className="text-[38px] font-normal font-Playfair mt-11">Password Recovered!</h1>
         <p className="text-[#919090] text-[16px] font-normal font-Inter mb-12 ">Password Reset Successful</p>
         <img src={ResetPwdImg} alt="Password Recovered" className='mx-auto mb-14' />

         <Link to="/login">
            <button className="text-white font-light tracking-tight text-[15px] font-Inter cursor-pointer bg-[#805300] px-44 py-3 rounded-md mobile:w-[350px] mobile:px-[40px]">Proceed to login</button>
         </Link>

         </div>  
        </>
    );
};

export default PwdRecovered;
