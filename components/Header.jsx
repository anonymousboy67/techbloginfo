import React from "react";
import Image from "next/image";
import { assets } from "@/Assets/assets";

const Header = () => {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Image
          src={assets.logo} width={180} alt='logo' className='w-[130px] sm:w-auto'

          height={100}
          
        />
        <button
          className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]"
        >
          Get started
          {/* Corrected Image here */}
          <Image 
            src={assets.arrow}
            width={20} 
            height={20} 
            alt="Arrow Icon"
          />
        </button>
        <div className="text-center my-8">
          <h1>Latest Blogs</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
