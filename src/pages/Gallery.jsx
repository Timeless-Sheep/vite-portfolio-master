import React from 'react'
import Images from '../components/Images';
import Navbar from "../components/Navbar";

const Gallery = () => {
    return (
      <div className="w-full min-h-svh flex flex-col">
        <Navbar />
        <Images />
      </div>
    );
  };
export default Gallery