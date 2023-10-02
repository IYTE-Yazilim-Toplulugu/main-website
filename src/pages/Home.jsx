import React from 'react';
import AboutUs from '../components/AboutUs';
import Banner from '../components/Banner';
import CopyRight from '../components/CopyRight';
import Events from '../components/Events';
import Footer from '../components/Footer3';
import Navbar1 from '../components/Navbar1';
import SocialLinks from '../components/SocialLinks';
import Stakeholders from '../components/Stakeholders';
import Donators from "../components/Donators";
import Faq from "../components/Faq";
const Home = () => {
  return (
    <div className=''>
      <Navbar1 />
      <meta name="google-site-verification" content="KuBGjSO_RU-NqkzTVBRPsasuRdG5J30kkffXQdosHSc" />
      <div className='mt-16'>
        <Banner />
        <div id='aboutUs'><AboutUs /></div>
        <div id='events'><Events /></div>
        <Stakeholders />
        <div id='socialLinks'><SocialLinks /></div>
        <div id='faq'><Faq/></div>
        <Footer />
        <CopyRight />
      </div>
    </div>
  )
}

export default Home