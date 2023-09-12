import React from 'react';
import LogoCanvas from './canvases/Logo';

import DiscordLogo from "../assets/images/discord-mark-white.png";


const Footer = () => {
  return (
    <div className='bg-gray-800'>
        <div className='container max-w-7xl mx-auto py-6 px-2'>

            {/* Top */}
            <div className='text-white md:grid md:grid-cols-4'>

                {/* Top Col 1 */}
                <div className='flex flex-col items-center md:border-r-2 md:border-b-0 border-b-2 border-white/20 px-2 pb-4 md:pb-0'>
                    <div className='max-h-64'>
                        <LogoCanvas />
                    </div>
                    <h2 className='my-4 text-md'>İYTE Yazılım Topluluğu</h2>
                    <p className='text-sm text-center'>Incididunt esse excepteur cupidatat nulla cupidatat non nulla labore deserunt eiusmod ipsum ad sunt anim. Laboris anim amet nisi sint proident amet do in eu id aute. Id fugiat laborum velit elit nisi ullamco ut aliquip voluptate in exercitation.</p>
                </div>

                {/* Top Col 2 */}
                <div className='md:border-r-2 md:border-b-0 border-b-2 border-white/20 px-2 pt-2 md:pt-0'>
                    <h2 className='font-bold underline text-xl mt-2'>Linkler:</h2>
                    <ul>
                        <li className='my-5 ml-3 underline md:no-underline'><a href='/'>Ana Sayfa</a></li>
                        <li className='my-5 ml-3 underline md:no-underline'><a href='/about'>Biz Kimiz?</a></li>
                        <li className='my-5 ml-3 underline md:no-underline'><a href='/events'>Etkinlikler</a></li>
                        <li className='my-5 ml-3 underline md:no-underline'><a href='/sss'>Sıkça Sorulan Sorular</a></li>
                        <li className='my-5 ml-3 underline md:no-underline'><a href='/contacts'>İletişim</a></li>
                        <li className='my-5 ml-3 underline md:no-underline'><a href='/'>Forum</a></li>
                    </ul>
                </div>

                {/* Top Col 3 */}
                <div className='md:border-r-2 md:border-b-0 border-b-2 border-white/20 px-2'>
                    <h2 className='font-bold underline text-xl mt-2'>Sosyal Medya:</h2>
                    <div>
                        <div className='my-5 ml-3'><a href="https://www.instagram.com/iyte_yazilim/" target="_blank" rel="noreferrer" className='text-gray-400 hover:text-gray-500 flex items-center'>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                            </svg>
                            <span className='ml-2'>@iyte_yazilim</span>
                        </a></div>

                        <div className='my-5 ml-3'><a href="https://www.linkedin.com/company/iyteyazilim/" target="_blank" rel="noreferrer" className='text-gray-400 hover:text-gray-500 flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 448 512" className="w-6 h-6"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
                            <span className='ml-2'>İYTE Yazılım Topluluğu</span>
                        </a></div>

                        <div className='my-5 ml-3'><a href="https://www.facebook.com/IYTESS" target="_blank" rel="noreferrer" className='text-gray-400 hover:text-gray-500 flex'>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                            </svg>
                            <span className='ml-2'>IYTESS</span>
                        </a></div>

                        <div className='my-5 ml-3'><a href="https://github.com/IYTE-Yazilim-Toplulugu" target="_blank" rel="noreferrer" className='text-gray-400 hover:text-gray-500 flex'>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                            </svg>
                            <span className='ml-2'>GitHub</span>
                        </a></div>

                        <div className='my-5 ml-3'><a href="https://www.youtube.com/@iyteyazilimtoplulugu" target="_blank" rel="noreferrer" className='text-gray-400 hover:text-gray-500 flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" aria-hidden="true" className="w-6 h-6"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
                            <span className='ml-2'>@iyteyazilimtoplulugu</span>
                        </a></div>

                    </div>
                </div>

                {/* Top Col 4 */}
                <div className='px-2'>
                    <h2 className='font-bold underline text-xl mt-2 text-center'>Discord Sunucumuza Katıl</h2>
                    <div className='flex flex-col items-center'>
                        <img src={DiscordLogo} alt="Discord" className='w-3/5 my-4' />
                        <button className='bg-[#5865F2] hover:bg-[#525ee4] transition-colors duration-150 ease-linear p-3 rounded-lg'>İYTE Yazılım Topluluğu</button>
                    </div>
                </div>
            </div>

            <br />
            <hr />
            <br />
            
            {/* Bottom */}
            <div className='md:grid md:grid-cols-3 md:gap-3 w-full'>
                
                {/* Spotify */}
                <div className='h-[170px] md:h-[40vh] lg:h-[50vh]'>
                    <iframe title='Spotify' style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/playlist/2PNOuzyhwcMRYXt7x0cxEY?utm_source=generator" width="100%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>

                {/* Map */}
                <div className='md:col-span-2 h-[250px] md:h-[40vh] lg:h-[50vh]'>
                    <iframe title='Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12521.16346442361!2d26.63019863189723!3d38.3190947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bb90f9aaaaaaab%3A0xed70c1a0fe6503c9!2zxLB6bWlyIFnDvGtzZWsgVGVrbm9sb2ppIEVuc3RpdMO8c8O8IMSwWVRF!5e0!3m2!1str!2str!4v1678538954771!5m2!1str!2str" width="100%" height="100%" style={{ border:0, borderRadius: "12px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer