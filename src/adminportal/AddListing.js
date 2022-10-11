import React, { useState, useContext, useEffect } from 'react';
import{Link} from 'react-router-dom'

import RoomsDrop from '../components/RoomsDrop';

import {  addDoc, collection } from "firebase/firestore"; 
import  {db,storage} from '../config/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import {useNavigate} from 'react-router-dom';








const AddListing =  () => {

  const navigate = useNavigate();


  const [image, setImage] = useState("");
  const [url, setUrl] = useState(null);
  const [country  , setCountry] = useState("");
  const [propname  , setPropname] = useState("");
  const [propertytype  , setPropertytype] = useState("");
  const [address  , setAddress] = useState("");
  const [price  , setPrice] = useState("");
  const [bedrooms  , setBedrooms] = useState("");
  const [bathrooms  , setBathrooms] = useState("");
  const [wifi  , setWifi] = useState("");

  function handleChange(e) {
  if (e.target.files[0]) {
    setImage(e.target.files[0]);
  }
}

  const createDocs = (e) => {
    e.preventDefault();


  
    
    const imageRef =  ref(storage, `/images/${Date.now()}${image.name}`);
    const uploadImage = uploadBytesResumable(imageRef, image);
        uploadImage.on(
            "state_changed",
            (snapshot) => {
                const progressPercent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
            },
            (err) => {
                console.log(err);
            },
            () => {
              
                getDownloadURL(uploadImage.snapshot.ref).then((url) => {
                  const docRef =  addDoc(db,"properties"); 
                    addDoc(docRef, {
                      country: country,
                      propname : propname,
                      propertytype: propertytype,
                      address: address,
                      price: price,
                      bedrooms: bedrooms,
                      bathrooms: bathrooms,
                      wifi: wifi,
                      image:url, 


                    })
                        .then(() => {
                            alert("Hotel added successfully", { type: "success" });

                        })
                        .catch((err) => {
                            alert("Error adding hotel", { type: "error" });
                        });
                });
            }
        );

          
  }; 


 
    return (
        <div className='min-h-[420px] grid justify-items-center'>

       <h1 className='mb-4 font-weight:700  '>Upload your listing to our database</h1>
        
        <form >
        <div>

  

        <input value={country}
          className='border border-gray-300 focus:border-violet-700 rounded w-96 px-4 h-10 mt-2 text-sm outline-none'
          type='text'
          placeholder='Enter your province'  onChange={(e)=>{setCountry(e.target.value)}}   
        /><br></br>
        <br></br>

        

         <input value={propname}
          className='border border-gray-300 focus:border-violet-700 rounded w-96 px-4 h-10 mt-2 text-sm outline-none'
          type='text'
          placeholder='Property Name'  onChange={(e)=>{setPropname(e.target.value)}} 
        /><br></br>
        <br></br>

        <input value={propertytype}
          className='border border-gray-300 focus:border-violet-700 rounded w-96 px-4 h-10 mt-2 text-sm outline-none'
          type='text'
          placeholder='propertytype : House/Apartment'  onChange={(e)=>{setPropertytype(e.target.value)}}  
        /><br></br>
        <br></br>


        <input value={address}
          className='border border-gray-300 focus:border-violet-700 rounded w-96 px-4 h-10 mt-2 text-sm outline-none'
          type='address'
          placeholder='Physical Address'  onChange={(e)=>{setAddress(e.target.value)}} 
        /><br></br>
        <br></br>



        <input value={price}
          className='border border-gray-300 focus:border-violet-700 rounded w-96 px-4 h-10 mt-2 text-sm outline-none'
          type='number'
          placeholder='Price'  onChange={(e)=>{setPrice(e.target.value)}} 
        /><br></br>
        <br></br>



        <input value={bedrooms}
          className='border border-gray-300 focus:border-violet-700 rounded w-96 px-4 h-10 mt-2 text-sm outline-none'
          type='text'
          placeholder='Number of Bedrooms'  onChange={(e)=>{setBedrooms(e.target.value)}}
           
        /><br></br>
        <br></br>




        <input value={bathrooms}
          className='border border-gray-300 focus:border-violet-700 rounded w-96 px-4 h-10 mt-2 text-sm outline-none'
          type='text'
          placeholder='Number of Bathrooms' onChange={(e)=>{setBathrooms(e.target.value)}} 
        /><br></br>
        <br></br>




        <input value={wifi}
          className='border border-gray-300 focus:border-violet-700 rounded w-96 px-4 h-10 mt-2 text-sm outline-none'
          type='text'
          placeholder='Wifi speed (Mbs)' onChange={(e)=>{setWifi(e.target.value)}} 
        /><br></br>
        <br></br>

        <img src={url} />
        <input className='  rounded w-96 px-4 h-10 mt-2 text-sm outline-none' type="file"  onChange={handleChange} />
        
      
        </div>


        <div>
            <button className='flex justify-center bg-violet-700 hover:bg-violet-800 w-full mt-4 mb-4 text-white px-16 py-4 rounded-lg transition pt-3'
             type='submit' onClick={createDocs}
             >Upload Property </button>

            </div>

    

        </form>

        
    </div>

    
    )
}

export default AddListing;