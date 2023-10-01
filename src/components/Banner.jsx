import React, { useState, useEffect } from 'react';
import bannerData from './BannerData';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PeopleIcon from '@mui/icons-material/People';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import RocketIcon from '@mui/icons-material/Rocket';
import DiscordLogo from "../assets/images/discord-logo-white.png";



const Discord = () => {
  return(
    <a href='https://discord.gg/DZHsJYZGgs' target="_blank" rel="noreferrer" className='flex justify-center items-center bg-[#5865F2] h-16 md:h-24 hover:bg-[#525ee4] py-4 md:py-6 active:py-3 md:hover:py-5 transition-all duration-75 ease-linear cursor-pointer'>
      <img src={DiscordLogo} alt="Discord Logo" className='h-full transition-all duration-200 ease-in cursor-pointer' />
    </a>
  )
}

const Numbers = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [size, setSize] = useState(60);
  useEffect(() => {
    setWidth(window.innerWidth);
    if (width < "1024") {
      setSize(35);
    }
    else {
      setSize(60);
    }
  }, [width, size]);
  return (
    <div className='bg-gray-700 h-20 lg:h-36 max-w-screen'>
      <div className='flex container max-w-5xl justify-between mx-auto items-center px-5 h-full'>
        <div className='flex flex-col items-center hover:bg-gray-800 w-full h-full justify-center text-white'>
          <LocationOnIcon sx={{ fontSize: size }} />
          <p className='font-bold cursor-default'>Urla/İzmir</p>
        </div>
        <div className='flex flex-col items-center hover:bg-gray-800 w-full h-full justify-center text-white'>
          <RocketIcon sx={{ fontSize: size }} />
          <p className='font-bold cursor-default'></p>
        </div>
        <div className='flex flex-col items-center hover:bg-gray-800 w-full h-full justify-center text-white'>
          <InstagramIcon sx={{ fontSize: size }} />
          <p className='font-bold cursor-default'>1188</p>
        </div>
      </div>
    </div>
  )
}


const Banner = () => {
  const banner = bannerData;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = banner.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, banner]);
  
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 10000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className='z-0'>
      <div className='flex justify-center max-w-screen h-[90vh] m-auto relative overflow-x-hidden overflow-y-hidden z-0 bg-black'>
        {bannerData.map((data, dataIndex) => {

          let position = "translate-x-full opacity-0";
          if (index === dataIndex) position = "translate-x-0 opacity-100";
          if (dataIndex === index - 1 || (index === 0 && dataIndex === bannerData.length - 1)) position = "-translate-x-full opacity-0";

          return (
            <div key={data.id} className={`${position} flex-1 absolute top-0 left-0 min-w-full h-[90vh] transition-all duration-300 ease-linear`}>
              <img src={data.image} alt={data.id} className='w-full h-full object-cover'/>
            </div>
          )
        })}

        <div className='buttons'>
          <div className='flex justify-center items-center absolute left-2 sm:left-10 top-1/2 w-6 sm:w-12 h-6 sm:h-12 bg-black/70 rounded-full cursor-pointer' onClick={() => setIndex(index - 1)} >
            <KeyboardArrowLeftIcon className='text-white' />
          </div>

          <div className='flex justify-center items-center absolute right-2 sm:right-10 top-1/2 w-6 sm:w-12 h-6 sm:h-12 bg-black/70 rounded-full cursor-pointer' onClick={() => setIndex(index + 1)}>
            <KeyboardArrowRightIcon className='text-white' />
          </div>
        </div>
      </div>

      <Numbers />
      <Discord />
    </section>
  )
}

export default Banner