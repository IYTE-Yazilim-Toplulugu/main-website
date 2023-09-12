import React from 'react';
import { useNavigate } from 'react-router-dom';

const Event = ({ title, image, miniDesc, url, eventStyle}) => {
  return (
    <div className={`${eventStyle} bg-yellow-500 max-h-96 lg:h-96 h-80 rounded-md p-2 my-2 lg:my-0`}>
      {title}
    </div>
  )
}

const Events = () => {
  const navigation = useNavigate();
  return (
    <div className='bg-white py-4'>
      <div className='container max-w-4xl mx-auto flex justify-center flex-col items-center'>
        <div onClick={() => navigation("/events")} className='my-12'>
          <h1 className='title text-center text-4xl font-bold cursor-pointer'>Etkinlikler</h1>
          <div className='line'></div>
        </div>
        <div className='px-3 lg:px-0 lg:grid lg:grid-cols-3 gap-4 w-full'>
          <Event title={"Python Eğitimi"} />
          <Event title={"GitHub Eğitimi"} />
          <Event title={"Docker Eğitimi"} />
          <Event title={"Code Night"} eventStyle={"col-span-2"} />
          <Event title={"Oyun Geliştirme Eğitimi"} />
          <Event title={"Oyun Geliştirme Eğitimi"} />
          <Event title={"Genç İzmir Dijital Akademi"} eventStyle={"col-span-2"} />
        </div>
      </div>
    </div>
  )
}

export default Events