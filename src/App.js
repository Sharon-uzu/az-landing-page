import React from 'react';
import SignUp from './Screens/SignUp';
import { Route, Routes } from 'react-router-dom';
import Landing from './Screens/Landing';
import AboutUs from './Screens/AboutUs';
import Faqs from './Screens/Faqs';
import ContactUs from './Screens/ContactUs';


function App() {
  return (
    <div>

        <Routes>

          <Route path='/' element={<Landing />} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/about' element={<AboutUs/>} />
          <Route path='/faq' element={<Faqs/>} />
          <Route path='/contact' element={<ContactUs/>} />

          

        </Routes>

    </div>
  );
}

export default App;
