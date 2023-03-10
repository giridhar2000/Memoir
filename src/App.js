import React from 'react'
import './App.css';
import NavigationBar from './Components/NavigationBar';
import AdminLogin from './Components/Admin/AdminLogin';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHome from './Components/Admin/AdminHome';
import Footer from './Components/Footer';
import Home from './Components/Users/Home';
import Contact from './Components/contact/Contact';
import PageNotFound from './Components/PageNotFound';


function App() {
  return (
    <div className="app">
      <NavigationBar />
      <div className="content-wrap">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/AdminLogin' element={<AdminLogin />}/>
            {localStorage.getItem('LoggedIn') ? 
            <Route path='/AdminHome' element={<AdminHome />}/> : 
            <Route path='/AdminHome' element={<PageNotFound />}/>}
            <Route path='/Contact' element={<Contact />}/>
          </Routes>
        </BrowserRouter>
        </div>

        <Footer />

        
    </div>
  );
}

export default App;
