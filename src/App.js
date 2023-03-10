import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/navbar';
import Footer from './components/footer'
import Home from "./views/Home"
import Profile from "./views/Profile"
import injectContext from "./store/context";


const App = () => {
  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:id" element={<Profile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  )
}

export default injectContext(App);