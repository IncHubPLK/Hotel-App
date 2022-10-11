import React, { useState, useEffect, useContext } from 'react';

// import icons
import {
  RiWallet3Line,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from 'react-icons/ri';

import { BiBed } from 'react-icons/bi';
// import headless ui components
import { Menu } from '@headlessui/react';
// import context
import { HouseContext } from './HouseContext';

const RoomsDrop = () => {
  const { price, setPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  const prices = [
   
    {
      value: '1 Bedroom',
    },
    {
      value: '1 Bedroom -   (Sharing)',
    },
    {
      value: '2 Bedrooms',
    },
    {
      value: '2 Bedrooms -  (Sharing)',
    },

    {
      value: '3 Bedrooms',
    },
    {
      value: '3 Bedrooms -  (Sharing)',
    },
  
  ];

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full'
      >
        <BiBed className='dropdown-icon-primary' />
        <div>
        <div className='text-[15px] font-medium leading-tight '>Available Rooms</div>
          <div className='text-[13px] '>Choose your room type</div>
        </div>
        {isOpen ? (
        <RiArrowDownSLine className='dropdown-icon-secondary' />
        ) : (
          
          <RiArrowUpSLine className='dropdown-icon-secondary ' />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {prices.map((price, index) => {
          return (
            <Menu.Item
              as='li'
              onClick={() => setPrice(price.value)}
              key={index}
              className='cursor-pointer hover:text-violet-700 transition'
            >
              {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default RoomsDrop;
