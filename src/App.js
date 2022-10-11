import React from 'react';

import {Routes, Route } from 'react-router-dom';



import Footer from './components/Footer';
import Header from './components/Header';

// import pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import Signup from './pages/Register'
import Login from './pages/Login'

import ForgotPassword from './pages/ForgotPassword';


//import admin
import ViewInvoices from './adminportal/ViewInvoices';
import AddListing from './adminportal/AddListing';
import Lisitings from './adminportal/Listings';
import { AuthContextProvider } from './contexts/AuthContext';

const App = () => {
  return (

    
    <div className='max-w-[1440px] mx-auto bg-white'>


     <Header />

     <React.StrictMode>

<AuthContextProvider>
  
      <Routes>
        
       
        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Home />} />
        <Route path='/forgot-password' element={<ForgotPassword/>} />
        <Route path='/viewinvoices' element={<ViewInvoices/>} />
        <Route path='/addlisting' element={<AddListing/>} />
        <Route path='/listings' element={<Lisitings/>} />
        
        <Route path='/property/:id' element={<PropertyDetails />} />
      </Routes>

      </AuthContextProvider>

      </React.StrictMode>

      <Footer />
    
    
  
    </div>


  
  );
};

export default App;
