import React from 'react';
import Swal from 'sweetalert2';

export const Images = () => {
  const showImageModal = (imageUrl, imageAlt) => {
    Swal.fire({
      imageUrl: imageUrl,
      imageAlt: imageAlt,
      showConfirmButton: false,
      showCloseButton: true,
    });
  };

  return (
    <div className="flex justify-center mt-[2rem]">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8 max-w-6xl w-full">
      <div className="overflow-hidden cursor-pointer">
        <img
          src="/new-images/smolkitten.jpeg"
          alt="BABY GINGERALE"
          className="w-80 h-48 object-cover transform hover:scale-105 transition-transform duration-300"
          onClick={() => showImageModal("/new-images/smolkitten.jpeg", "BABY GINGERALE")}
        />
      </div>
      <div className="overflow-hidden cursor-pointer">
        <img
          src="/new-images/ongrass.png"
          alt="grass"
          className="w-80 h-48 object-cover transform hover:scale-105 transition-transform duration-300"
          onClick={() => showImageModal("/new-images/ongrass.png", "grass")}
        />
      </div>
      <div className="overflow-hidden cursor-pointer">
        <img
          src="/new-images/twinning.png"
          alt="Cat-Dad with his kitten"
          className="w-80 h-48 object-cover transform hover:scale-105 transition-transform duration-300"
          onClick={() => showImageModal("/new-images/twinning.png", "Cat-Dad with his kitten")}
        />
      </div>
      <div className="overflow-hidden cursor-pointer">
        <img
          src="/new-images/whut.png"
          alt="looking somewhere"
          className="w-80 h-48 object-cover transform hover:scale-105 transition-transform duration-300"
          onClick={() => showImageModal("/new-images/whut.png", "looking somewhere")}
        />
      </div>
      <div className="overflow-hidden cursor-pointer">
        <img
          src="/new-images/chilling.png"
          alt="sitting down"
          className="w-80 h-48 object-cover transform hover:scale-105 transition-transform duration-300"
          onClick={() => showImageModal("/new-images/chilling.png", "sitting down")}
        />
      </div>
      <div className="overflow-hidden cursor-pointer">
        <img
          src="/new-images/withmybarkada.png"
          alt="with the best people"
          className="w-80 h-48 object-cover transform hover:scale-105 transition-transform duration-300"
          onClick={() => showImageModal("/new-images/withmybarkada.png", "with the best people")}
        />
      </div>
      <div className="overflow-hidden cursor-pointer">
        <img
          src="/new-images/stare.png"
          alt="blank space cat"
          className="w-80 h-48 object-cover transform hover:scale-105 transition-transform duration-300"
          onClick={() => showImageModal("/new-images/stare.png", "blank space cat")}
        />
      </div>
      <div className="overflow-hidden cursor-pointer">
        <img
          src="/new-images/barkada.jpg"
          alt="blank space cat"
          className="w-80 h-48 object-cover transform hover:scale-105 transition-transform duration-300"
          onClick={() => showImageModal("/new-images/barkada.jpg", "my brothers from another mothers")}
        />
      </div>
      <div className="overflow-hidden cursor-pointer">
        <img
          src="/new-images/mybrothers.jpg"
          alt="blank space cat"
          className="w-80 h-48 object-cover transform hover:scale-105 transition-transform duration-300"
          onClick={() => showImageModal("/new-images/mybrothers.jpg", "my brothers")}
        />
      </div>
      <div className="overflow-hidden cursor-pointer">
        <img
          src="/new-images/pacxnuki.jpg"
          alt="blank space cat"
          className="w-80 h-48 object-cover transform hover:scale-105 transition-transform duration-300"
          onClick={() => showImageModal("/new-images/pacxnuki.jpg", "my brothers from another mothers")}
        />
      </div>
      
    </div>
  </div>
  );
};

export default Images;
