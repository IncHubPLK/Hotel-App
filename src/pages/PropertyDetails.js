import React from 'react';

import PropertyDropdown from '../components/PropertyDropdown';
import RoomsDrop from '../components/RoomsDrop';
import People from '../components/People';

// import houseData
import { housesData } from '../data';
//  useParams
import { useParams } from 'react-router-dom';
// import icons
import { BiBed, BiBath, BiArea, BiPhone } from 'react-icons/bi';
// import link
import { Link } from 'react-router-dom';


const PropertyDetails = () => {
  const { id } = useParams();
  const property = housesData.find((house) => {
    return house.id === parseInt(id);
  });


  return (
   

    <div className='container mx-auto min-h-[800px] mb-14'>
      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
        <div>
          <h2 className='text-2xl font-semibold'>{property.name}</h2>
          <h3 className='text-lg mb-4'>{property.address}</h3>
        </div>
        <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
          <div className='bg-green-500 rounded-full text-white px-3 inline-block'>
            {property.type}
          </div>
          <div className='bg-violet-500 rounded-full text-white px-3 inline-block'>
            {property.country}
          </div>
        </div>
        <div className='text-3xl font-semibold text-violet-600'>
          R {property.price}
        </div>
      </div>
      <div className='flex flex-col items-start gap-8 lg:flex-row'>
        <div className='max-w-[768px]'>
          <div className='mb-8'>
            <img src={property.imageLg} alt='' />
          </div>
          <div className='flex gap-x-6 text-violet-700 mb-6'>
            <div className='flex gap-x-2 items-center'>
              <BiBed className='text-2xl' />
              <div className='text-lg font-medium'>{property.bedrooms}</div>
            </div>
            <div className='flex gap-x-2 items-center'>
              <BiBath className='text-2xl' />
              <div className='text-lg font-medium'>{property.bathrooms}</div>
            </div>
            <div className='flex gap-x-2 items-center'>
              <BiArea className='text-2xl' />
              <div className='text-lg font-medium'>{property.surface}</div>
            </div>
          </div>
          <p>{property.description}</p>
        </div>
        <div className='flex-1 w-full mb-8 bg-white border border-gray-300 rounded-lg px-6 py-8'>
          <div className='flex items-center gap-x-4 mb-8'>
            <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
              <img src={property.agent.image}></img>
            </div>
            <div>
              <div className='font-bold text-lg'>{property.agent.name}</div>
              <Link to='' className='text-violet-700 text-sm'>
                View listings
              </Link>
            </div>
          </div>
          <form className='flex flex-col gap-y-4'>

          <input
              className='border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm outline-none'
              type='number'
              placeholder='Number of people'
            />
            <div className='w-full border-none'>
            <RoomsDrop  />
            </div>

            <h1 className='w-full px-4 h-2 text-sm outline-none mb-2'
              placeholder='Check-In Date'>
              Check-In Date
              </h1>

            <input
              className='border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm outline-none'
              type='date'
              placeholder='Check-In Date'
            />

             <h1 className='w-full px-4 h-2 text-sm outline-none mb-2'>
              Checkout Date
              </h1>

            <input
              className='border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm outline-none'
              type='date'
              placeholder='Check-In Date'
            />
          

        
            <input
              className='border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm outline-none'
              type='address'
              placeholder='Billing Address Line 1'
            />


            <input
              className='border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm outline-none'
              type='address'
              placeholder='Billing Address Line 2'
            />

            <input
              className='border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm outline-none'
              type='text'
              placeholder='Area Code'
            />
      

<div className='text-3xl font-semibold text-violet-600'>
          R {property.price}
        </div>
            <div className='flex gap-x-2'>
              <button
                className='bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition'
                type='submit'
              >
                Confirm Booking
              </button>
              
            </div>
          </form>
        </div>
      </div>

      <div className="flex google-map-code w-42 mt-3 justify-center">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="900" height="450" ></iframe>
        </div>
    </div>
    
  );
};

export default PropertyDetails;
