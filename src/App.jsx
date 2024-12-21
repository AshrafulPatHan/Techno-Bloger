import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './Component/Home'
import Error from './Component/Error'
import { ToastContainer } from 'react-toastify';


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition: Bounce
      />
    </>
  )
}

export default App
