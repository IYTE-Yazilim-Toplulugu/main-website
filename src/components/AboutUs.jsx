import React from 'react';
import LogoCanvas from './canvases/Logo';


const AboutUs = () => {
  return (
    <div className='bg-gray-800 pb-20'>
      <div className='flex flex-col justify-start items-center container max-w-4xl mx-auto px-2'>
        <br/>
        {/* Logo */}
        <div className='h-3/5 mt-2 relative z-0'>
          <LogoCanvas />
        </div>

        {/* Title */}
        <div className=''>
          <h1 className='title relative z-10 text-4xl -mt-2 text-white font-bold cursor-pointer'>Biz Kimiz?</h1>
          <div className='line'></div>
        </div>

        {/* Content */}
        <div className='text-center lg:text-lg text-xs'>
          <p className='mt-8 text-white'>İYTE Yazılım Topluluğu 2011'de kurulmuş İzmir Yüksek Teknoloji Enstitüsü'nde Bilgisayar Mühendisliği bölümü öğrencileri
          tarafından kurulan ve kar amacı gütmeyen bir öğrenci topluluğudur. İYTE Yazılım Topluluğu, bağlı olduğu Bilgisayar Mühendisliği bölümüne, İzmir Yüksek 
          Teknoloji Enstitüsü’ne ve ülkesinin kalkınmasına yönelik büyük hedefleri olan büyük bir öğrenci topluluğudur. Bulunduğu her alanda en iyisini hedefler.
          İYTE Yazılım Topluluğu, bağlı olduğu İzmir Yüksek Teknıloji Enstitüsü’nün belirlediği ideallere, vizyona, misyona ve hedeflere uygun olarak kendisine 
          <b> Topluluk Kurallarında</b> belirtilen maddeleri amaç edinmiştir.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs