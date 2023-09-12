import React, { useState } from 'react'
import navLogo from "../img/nav-logo.png"

const Dropdown = () => {
  return (<div id="nav-dropdown" className="absolute bg-purple-300 right-0 rounded-md p-2 w-full mt-1">
    <ul>
      <li>
        <a href="" className="
      w-full
      hover:bg-indigo-200
      rounded
      ">Eğitimler </a>
      </li>
      <li>
        <a href="">Yarışmalar</a>
      </li>
      <li>
        <a href="">Diğer</a>
      </li>
    </ul>
  </div>
  )
}

const Navbar = () => {

  const [dropdown,setDroprown] = useState(false);

  return (
    <div className='z-10 fixed'>
      <nav className="bg-fuchsia-800 px-5 text-lg h-16 pt-1 drop-shadow-lg fixed w-full">
        <div className="container mx-auto flex justify-between content-center mt-[-4px] ">
          <a href="" className="flex items-center ">
            <img src={navLogo} alt="logo" className="w-16 h-16 mx-2" />
            <span>İyte Yazılım Toplulugu</span>
          </a>
          <div className="flex ">
            <ul className="flex items-center text-xl">
              <li >
                <a href="" className="
                px-2 
                text-violet-300 
                hover:-translate-y-0.5 
                hover:text-violet-300 
                transition 
                font-bold 
                transition-transform
                "
                >Ana Sayfa</a>
              </li>|

              <li>
                <a href="" className="
                flex 
                px-2
                hover:text-violet-300 
                transition 
                hover:-translate-y-0.5
                "
                >Biz kimiz</a>
              </li>|

              <li className="relative">
                <button onClick={() => setDroprown(!dropdown)} className="
                hover:-translate-y-0.5 
                hover:text-violet-300 
                transition
                px-2 
                "
                >Etkinlikler <div className="rotate-90 inline-flex text-xl pl-1 mr-0 font-semibold">&gt;</div>
                </button>

                {/* dropdown */}
                {
                  dropdown ? <Dropdown /> : null
                }
                {/* dropdown */}

              </li>|
              <li>
                <a href='' className="
                px-2 
                hover:-translate-y-0.5 
                hover:text-violet-300 
                transition
                "
                >İletişim
                </a>
              </li>
              <li>
                <a href='' className="
                pl-8 
                text-base  
                text-slate-200 
                hover:text-slate-500 
                transition-colors
                "
                >Üye ol
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav >
    </div >
  )
}

export default Navbar