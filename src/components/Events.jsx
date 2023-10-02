import React from 'react';
import { useNavigate } from 'react-router-dom';
import PythonBackground from "../assets/images/python-ed.JPG"
import GithubBackground from "../assets/images/github-ed.JPG"
import DockerBackground from "../assets/images/docker-ed.JPG"
import CodeNightBackground from "../assets/images/code-night.JPG"
import Path4GameBackground from "../assets/images/path4game.JPG"


const Event = ({ title, image, miniDesc, url, eventStyle}) => {
  return (
<div className={`${eventStyle} bg-orange-400 text-center font-bold max-h-96 lg:h-96 h-80 rounded-xl p-2 my-2 lg:my-0`}>
  {title}
  <div className="flex flex-col justify-center items-center -mt-3 h-full">
    <div className="w-full h-5/6 flex items-center justify-center overflow-hidden">
      <img src={image} className='w-auto h-auto max-h-full max-w-full rounded-3xl' alt="" />
    </div>
  </div>
</div>


  
  )
}

const Events = () => {
  const navigation = useNavigate();
  return (
    <div className='bg-white py-4'>
      <div className='container max-w-4xl mx-auto flex justify-center flex-col items-center'>
        <div className='my-12'>
          <h1 className='title text-center text-4xl font-bold cursor-pointer'>Etkinlikler</h1>
          <div className='line'></div>
        </div>
        
        <div className='px-3 lg:px-0 lg:grid lg:grid-cols-3 gap-4 w-full'>
          <Event title={"Python Eğitimi"} image={PythonBackground}/>
          <Event title={"GitHub Eğitimi"} image={GithubBackground}/>
          <Event title={"Docker Eğitimi"} image={DockerBackground}/>
          <Event title={"Code Night"} eventStyle={"col-span-2"} image={CodeNightBackground}/>
          <Event title={"Oyun Geliştirme Eğitimi"} image={Path4GameBackground}/>
        </div>
      </div>
    </div>
  )
}

export default Events