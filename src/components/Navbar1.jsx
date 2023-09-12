import React, { useEffect, useState } from 'react';
import navLogo2 from "../assets/images/a.png";

import { useNavigate } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';


const SubNav = ({ isOpen }) => {
    const navigation = useNavigate();
    const [translate, setTranslate] = useState("-translate-y-[100%]");
    console.log(isOpen);
    useEffect(() => {
        if (isOpen) {
            setTranslate("-translate-y-[0%]");
        }
        else {
            setTranslate("-translate-y-[100%]");
        }
    }, [isOpen])
    return (
        <div className={`sm:px-8 px-2 bg-white py-2 ${translate} relative z-0 transition-all duration-300 ease-linear`}>
            <h3 onClick={() => navigation("/")} className='mb-2 cursor-pointer text-black py-2 px-4 border-2 hover:bg-white/10 rounded-xl transition duration-300'>Ana Sayfa</h3>
            <h3 onClick={() => navigation("/about")} className='mb-2 cursor-pointer text-black py-2 px-4 border-2 hover:bg-white/10 rounded-xl transition duration-300'>Biz Kimiz?</h3>
            <h3 onClick={() => navigation("/events")} className='mb-2 cursor-pointer text-black py-2 px-4 border-2 active:shadow-xl hover:bg-white/10 rounded-xl transition duration-300'>Etkinlikler</h3>
            <h3 onClick={() => navigation("/sss")} className='mb-2 cursor-pointer text-black py-2 px-4 border-2 active:shadow-xl hover:bg-white/10 rounded-xl transition duration-300'>S.S.S.</h3>
            <h3 className='mb-2 cursor-pointer text-black py-2 px-4 border-2 hover:shadow-xl active:bg-white/10 rounded-xl transition duration-300'>İletişim</h3>
            <h3 className='cursor-pointer text-black py-2 px-4 border-2 hover:shadow-xl active:bg-white/10 rounded-xl transition duration-300 mb-2'>Forum</h3>

            <hr />

            <div className='flex justify-center mt-2'>
                <button className='py-2 px-4 rounded-lg bg-purple-400 transition-all duration-300 shadow-xl'>Üye Ol</button>
                <button className='ml-2 py-2 px-4 rounded-lg bg-green-400 transition-all duration-300 shadow-xl'>
                    <div className='absolute ml-16 -mt-3 w-5 h-5 rounded-md bg-red-700 text-red-400 flex justify-center items-center text-sm'>0</div>
                    <div>Yarışmalar</div>
                </button>
                <button className='ml-2 py-2 px-4 rounded-lg active:bg-[#FFDF00] bg-[#FFDF00] transition-all duration-300 shadow-xl'>
                    <p className='relative z-10'>Destekle</p>
                </button>
            </div>
        </div>
    )
}


const Navbar1 = () => {
    const [scrollY, setScrollY] = useState(window.scrollY);
    const [height, setHeight] = useState("h-20");
    const [titleFlex, setTitleFlex] = useState("flex-col");

    const [hamburger, setHamburger] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 1024) {
            setHamburger(false);

        }
        else {
            setHamburger(true);
        }
    }, []);
    
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });

    useEffect(() => {
        if (window.scrollY > 15) {
            if (hamburger) {
                setHeight("h-16");
                setTitleFlex("text-[10px]")
            } else {
                setHeight("h-16");
                setTitleFlex("text-[10px]");
            }
        }
        if (window.scrollY < 15) {
            if (hamburger) {
                setHeight("h-16");
                setTitleFlex("text-[10px]");
            } else {
                setHeight("h-20");
                setTitleFlex("text-[12px]");
            }
        }

    }, [scrollY, hamburger]);

    const navigation = useNavigate();

  return (
    <div className={`fixed top-0 w-screen ${height} bg-gradient-to-tl from-[#ebad4e] to-[#ff534f] z-50 transition-all duration-300 ease-linear shadow-xl`}>
        <nav className='flex justify-between items-center h-full xl:container max-w-9xl px-8 py-2 mx-auto relative z-10 xl:bg-none bg-gradient-to-tl from-[#ebad4e] to-[#ff534f]'>

            <div className='flex basis-1/4 h-full items-center'>
                <img src={navLogo2} alt="iss" className='h-full ' />
                <div className={`flex flex-col ${titleFlex} flex-wrap ml-3 font-semibold transition-all duration-300 ease-linear`}>
                    <p className='text-white'>İYTE</p>
                    <p className='text-white'>Yazılım</p>
                    <p className='text-white'>Topluluğu</p>
                </div>
            </div>

            {
                hamburger ? (
                    <MenuIcon onClick={() => setIsOpen(!isOpen)} sx={{ color: "black", cursor: "pointer", backgroundColor: "white", width: "36px", height: "36px", padding: "5px", borderRadius: "5px"  }} />
                ) : (
                    <>
                        <div className='flex basis-2/4 justify-between items-center text-sm px-0 2xl:px-16 xl:px-12'>
                            <h3 onClick={() => navigation("/")} className='text-center cursor-pointer text-white py-2 px-4 hover:shadow-xl hover:bg-white/10 rounded-xl transition duration-300'>Ana Sayfa</h3>
                            <h3 onClick={() => navigation("/about")} className='text-center cursor-pointer text-white py-2 px-4 hover:shadow-xl hover:bg-white/10 rounded-xl transition duration-300'>Biz Kimiz?</h3>
                            <h3 onClick={() => navigation("/events")} className='cursor-pointer text-white py-2 px-4 hover:shadow-xl hover:bg-white/10 rounded-xl transition duration-300'>Etkinlikler</h3>
                            <h3 onClick={() => navigation("/sss")} className='cursor-pointer text-white py-2 px-4 hover:shadow-xl hover:bg-white/10 rounded-xl transition duration-300'>S.S.S.</h3>
                            <h3 className='cursor-pointer text-white py-2 px-4 hover:shadow-xl hover:bg-white/10 rounded-xl transition duration-300'>İletişim</h3>
                            <h3 className='cursor-pointer text-white py-2 px-4 hover:shadow-xl hover:bg-white/10 rounded-xl transition duration-300'>Forum</h3>
                        </div>

                        <div className='flex basis-1/4 justify-end'>
                            <button className='py-1 px-3 rounded-lg hover:bg-white/30 transition-all duration-300 shadow-xl'>
                                <div className='absolute ml-16 -mt-3 w-5 h-5 rounded-md bg-red-700 text-red-400 flex justify-center items-center text-sm'>0</div>
                                <div>Yarışmalar</div>
                            </button>
                            <button className='ml-2 py-1 px-2 rounded-lg hover:bg-white/30 transition-all duration-300 shadow-xl'>Üye Ol</button>
                            <button className='ml-2 py-1 px-2 rounded-lg hover:bg-[#FFDF00] bg-[#FFDF00]/30 transition-all duration-300 shadow-xl'>
                                <p className='relative z-10'>Destekle</p>
                            </button>
                        </div>
                    </>
                )
            }

        </nav>
        {
            hamburger ? (<SubNav isOpen={isOpen} />) : null
        }
    </div>
  )
}

export default Navbar1