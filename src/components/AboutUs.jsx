import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoCanvas from './canvases/Logo';


const AboutUs = () => {
  const navigation = useNavigate();
  return (
    <div className='bg-gray-800 pb-20'>
      <div className='flex flex-col justify-start items-center container max-w-4xl mx-auto px-2'>
        <br/>
        {/* Logo */}
        <div className='h-3/5 mt-2 relative z-0'>
          <LogoCanvas />
        </div>

        {/* Title */}
        <div onClick={() => navigation("/about")} className=''>
          <h1 className='title relative z-10 text-4xl -mt-2 text-white font-bold cursor-pointer'>Biz Kimiz?</h1>
          <div className='line'></div>
        </div>

        {/* Content */}
        <div className='text-center lg:text-lg text-xs'>
          <p className='mt-8 text-white'>IYTE Yazılım Topluluğu 2011'de kurulmuş Bilgisayar Mühendisliği topluluğudur. Incididunt deserunt mollit ut eu eiusmod aliqua qui est est. Minim incididunt in exercitation eu. Adipisicing dolore quis ipsum anim tempor culpa mollit mollit magna. Laborum officia reprehenderit sunt duis non in incididunt occaecat sint sunt non veniam Lorem. In pariatur minim cupidatat reprehenderit aute amet aute do. Nisi magna consequat ut mollit elit id cupidatat veniam proident nulla et sint adipisicing. Duis magna incididunt in sint non Lorem enim minim dolor commodo labore.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs