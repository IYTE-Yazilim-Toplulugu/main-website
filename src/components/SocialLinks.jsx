import React from 'react';

import Discord from "../assets/images/discord.jpeg";
import Facebook from "../assets/images/facebook.jpeg";
import GitHub from "../assets/images/github.jpg";
import Instagram from "../assets/images/instagram.jpeg";
import Linkedin from "../assets/images/linkedin.jpg";
import Reddit from "../assets/images/reddit.png";
import Spotify from "../assets/images/spotify.jpg";
import YouTube from "../assets/images/youtube.jpg";

import Logo from "../assets/images/logo-colorful.png";

const Social = ({ image, alt, link, text }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className='h-[10vw] min-h-[12vh] cursor-pointer grayscale hover:grayscale-0 transition-all duration-200 ease-in'>
        <img src={image} alt="social" className='w-full h-full object-cover relative z-0' />
      </div>
      <div className='absolute z-10 sm:-mt-8 -mt-7 sm:ml-4 ml-2 text-white flex items-center h-6 grayscale-0 cursor-default'>
        <img src={Logo} alt="issLogo" className='h-full sm:mr-2 mr-1' />
        <p className='sm:text-sm text-xs'>{text}</p>
      </div>
    </a>
  )
}

const SocialLinks = () => {
  return (
    <div className='flex flex-col xl:max-w-4xl max-w-screen mx-auto mb-12 px-3'>
      <h1 className='text-center my-12 text-4xl font-semibold'>Bizi Takip Edin</h1>
      <div className='grid grid-cols-2'>
        <Social image={Discord} alt="Discord" text="İYTE Yazılım Topluluğu" link="https://discord.gg/DZHsJYZGgs" />
        <Social image={Spotify} alt="Spotify" text="Yazılım Vibes" link="https://open.spotify.com/playlist/2PNOuzyhwcMRYXt7x0cxEY?si=5c5dffe98c454ab3" />
        <Social image={Instagram} alt="Instagram" text="@iyte_yazilim" link="https://www.instagram.com/iyte_yazilim/" />
        <Social image={Reddit} alt="Reddit" text="r/IztechSoftwareSociety" link="https://www.reddit.com/r/IztechSoftwareSociety/" />
        <Social image={Linkedin} alt="Linkedin" text="İYTE Yazılım Topluluğu" link="https://www.linkedin.com/company/iyteyazilim/" />
        <Social image={Facebook} alt="Facebook" text="IYTESS" link="https://www.facebook.com/IYTESS" />
        <Social image={YouTube} alt="YouTube" text="@iyteyazilimtoplulugu" link="https://www.youtube.com/@iyteyazilimtoplulugu" />
        <Social image={GitHub} alt="GitHub" text="Iztech Software Society" link="https://github.com/IYTE-Yazilim-Toplulugu" />
      </div>
    </div>
  )
}

export default SocialLinks