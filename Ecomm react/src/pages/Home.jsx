import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Home = () => {

     const {darkMode, toggleTheme} = useContext(ThemeContext);
  return (

     <div className={`min-h-screen p-3
     ${ darkMode ? "min-h-screen bg-black text-white"  : "min-h-screen bg-white text-black"  }`} >

      Home

      </div>

  )
}

export default Home
