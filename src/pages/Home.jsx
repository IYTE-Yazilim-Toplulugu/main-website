import React from 'react';
import AboutUs from '../components/AboutUs';
import Banner from '../components/Banner';
import CopyRight from '../components/CopyRight';
import Events from '../components/Events';
import Footer from '../components/Footer3';
import Navbar1 from '../components/Navbar1';
import SocialLinks from '../components/SocialLinks';
import Stakeholders from '../components/Stakeholders';

const Home = () => {
  return (
    <div className='w-screen'>
      <Navbar1 />
      <div className='mt-16'>
        <Banner />
        <div id='aboutUs'><AboutUs /></div>
        <div id='events'><Events /></div>
        <Stakeholders />
        <div id='socialLinks'><SocialLinks /></div>
        <Footer />
        <CopyRight />
      </div>
    </div>
  )
}

export default Home