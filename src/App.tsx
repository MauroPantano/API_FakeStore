import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Components/home';
import Shop from './Components/shop';
import About from './Components/about';
import Contact from './Components/contact';
import Profile from './Components/profile';
import { Privacy } from './Components/privacy';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />}/>
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/profile' element={<Profile />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;