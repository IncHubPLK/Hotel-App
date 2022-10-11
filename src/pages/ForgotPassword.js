
import React from 'react';


import{Link} from 'react-router-dom'

import Logo from '../assets/img/logo.svg';

function ForgotPassword (){



    return (
        <div className='min-h-[420px] grid justify-items-center'>

        <img src={Logo} alt='' />
        

        <form>

        

        <div>
        <input id='email'
          className='border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-12 w-80 text-sm outline-none'
          type='email'
          placeholder='Enter Email'  required
        /> <br></br>
        <br></br>
        
    
        </div>

        <div>
        <button className='flex justify-center w-full bg-violet-700 hover:bg-violet-800 text-white px-16 py-4 rounded-lg transition pt-3'
        type='submit'
        > Reset Password </button>

        </div>

        </form>


        <span className='flex justify-center'>Dont have an account?</span>
        <Link to="/login">Back to login</Link>

        <span className='flex justify-center hover:font-medium text-violet-700'>
            <Link to="/signup">Create new account</Link>

            </span>
        




    </div>
    )
}

export default ForgotPassword;