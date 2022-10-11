import React from 'react';

import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext';

// import components
import HouseList from '../components/HouseList';
import Banner from '../components/Banner';

import { AiFillFileAdd } from 'react-icons/ai';


const Home = () => {
 
  const { logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className='min-h-[1800px]'>
      <Banner />
      <HouseList />
      <div>

      <a className="float flex justify-center items-center">
    <AiFillFileAdd className="flex justify-center" onClick={handleLogout} /> 
</a>


</div>
    </div>
  );
};

export default Home;
