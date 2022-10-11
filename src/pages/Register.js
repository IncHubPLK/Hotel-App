
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import{Link} from 'react-router-dom';

import { UserAuth } from '../contexts/AuthContext';




import Logo from '../assets/img/logo.svg';
import { async } from '@firebase/util';



const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const {createUser} = UserAuth();
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e)=>{

     e.preventDefault();
     setError('');

     try {
       await createUser (email, password);
       navigate('/')
     } catch (e){
       setError(e.message);
       console.log(e.message);
     }

        
    };
 
 
    return (
        <div className='min-h-[420px] grid justify-items-center'>

            <img src={Logo} alt='' />
            

            <form onSubmit={handleSubmit} >

            <div>
            <input id='email'
              className='border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-12 w-80 text-sm outline-none'
              type='email'
              placeholder='Enter Email'  onChange={(e)=>setEmail(e.target.value)}  required
            /> <br></br>
            <br></br>
             <input id='password'
              className='border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-12 text-sm outline-none'
              type='password'
              placeholder='Create Password'  onChange={(e)=>setPassword(e.target.value)}   required
            /><br></br>
            <br></br>            
            </div>

            <div>
            <button className='flex justify-center bg-violet-700 hover:bg-violet-800 w-full mt-8 text-white px-16 py-4 rounded-lg transition pt-3'
             type='submit' onClick={Register}  
             > Login </button>

            </div>

            </form>


            <span className='flex item-center justify-center'>Already have an account?</span>

            <span className='flex justify-center hover:font-medium text-violet-700'>
                <Link to="/login">Redirect to login</Link>

                </span>
            
        </div>
    )
}

export default Register;