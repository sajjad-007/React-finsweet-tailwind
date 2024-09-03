import React from 'react'
import Peragraph from '../../../components/headings/peragraph/Peragraph'
import Image from '../../../components/Image'
import MeetImg from '../../../assets/images/about/meet.jpg'
import './about.css'
import { FaFacebook, FaTwitter } from 'react-icons/fa6'
import { FaLinkedin } from "react-icons/fa";

const AboutMeet = () => {
  return (
    <div className='py-32 bg-accent'>
        <div className="w-container my-0 mx-auto">
            <div>
                <h2 className='heading2 capitalize text-center'>meet our team</h2>
            </div>
            <div className="profile flex flex-wrap gap-8 mt-12 items-center justify-between">
                <div className="item1 w-[296px] h-[344px] bg-sada flex flex-col items-center justify-center pt-12 pb-[32px] px-16">
                    <div className="meet_profile_hover profile_pic w-[168px] h-[168px] rounded-full overflow-hidden bg-black relative cursor-pointer">
                        <Image className='h-full w-full object-cover bg-no-repeat ' source={MeetImg} alt='not found'/>
                        <div className='meet_profile absolute left-0 top-[180px]  bg-gradient-to-t from-[#5339fab7] to-[#ffffff43] h-full w-full transition-all ease-in-out duration-1000 flex items-center justify-center'>
                            <div className="icon_main absolute bottom-6 h-[30px] w-[100px] flex items-center justify-center gap-6">
                                <div className="icons text-white text-lg cursor-pointer h-3 w-3">
                                    <FaFacebook />
                                </div>
                                <div className="icons text-white text-lg cursor-pointer h-3 w-3">
                                    <FaTwitter />
                                </div>
                                <div className="icons text-white text-lg cursor-pointer h-3 w-3">
                                    <FaLinkedin />
                                </div>
                            </div>
                            {/* <div className="icon_wrapper ">
                                <div className="icons text-white text-lg cursor-pointer h-3 w-3">
                                    <FaFacebook />
                                </div>
                                <div className="icons absolute bottom-8 text-center  text-white text-lg cursor-pointer h-3 w-3">
                                    <FaFacebook />
                                </div>
                                <div className="icons absolute bottom-8 right-[36px] text-white text-lg cursor-pointer h-3 w-3">
                                    <FaFacebook />
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <h6 className='heading6 capitalize mt-[30px] mb-[2px]'>john smith</h6>
                    <Peragraph className='Label1 uppercase text-dark-blue-lite' text='ceo'/>
                </div>  
                <div className="item1 w-[296px] h-[344px] bg-sada flex flex-col items-center justify-center pt-12 pb-[32px] px-16">
                    <div className="meet_profile_hover profile_pic w-[168px] h-[168px] rounded-full overflow-hidden bg-black relative cursor-pointer">
                        <Image className='h-full w-full object-cover bg-no-repeat ' source={MeetImg} alt='not found'/>
                        <div className='meet_profile absolute left-0 top-[180px]  bg-gradient-to-t from-[#5339fab7] to-[#ffffff43] h-full w-full transition-all ease-in-out duration-1000 flex items-center justify-center'>
                            <div className="icon_main absolute bottom-6 h-[30px] w-[100px] flex items-center justify-center gap-6">
                                <div className="icons text-white text-lg cursor-pointer h-3 w-3">
                                    <FaFacebook />
                                </div>
                                <div className="icons text-white text-lg cursor-pointer h-3 w-3">
                                    <FaTwitter />
                                </div>
                                <div className="icons text-white text-lg cursor-pointer h-3 w-3">
                                    <FaLinkedin />
                                </div>
                            </div>
                            {/* <div className="icon_wrapper ">
                                <div className="icons text-white text-lg cursor-pointer h-3 w-3">
                                    <FaFacebook />
                                </div>
                                <div className="icons absolute bottom-8 text-center  text-white text-lg cursor-pointer h-3 w-3">
                                    <FaFacebook />
                                </div>
                                <div className="icons absolute bottom-8 right-[36px] text-white text-lg cursor-pointer h-3 w-3">
                                    <FaFacebook />
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <h6 className='heading6 capitalize mt-[30px] mb-[2px]'>john smith</h6>
                    <Peragraph className='Label1 uppercase text-dark-blue-lite' text='ceo'/>
                </div>  
                <div className="item1 w-[296px] h-[344px] bg-sada flex flex-col items-center justify-center pt-12 pb-[32px] px-16">
                    <div className="meet_profile_hover profile_pic w-[168px] h-[168px] rounded-full overflow-hidden bg-black relative cursor-pointer">
                        <Image className='h-full w-full object-cover bg-no-repeat ' source={MeetImg} alt='not found'/>
                        <div className='meet_profile absolute left-0 top-[180px]  bg-gradient-to-t from-[#5339fab7] to-[#ffffff43] h-full w-full transition-all ease-in-out duration-1000 flex items-center justify-center'>
                            <div className="icon_main absolute bottom-6 h-[30px] w-[100px] flex items-center justify-center gap-6">
                                <div className="icons text-white text-lg cursor-pointer h-3 w-3">
                                    <FaFacebook />
                                </div>
                                <div className="icons text-white text-lg cursor-pointer h-3 w-3">
                                    <FaTwitter />
                                </div>
                                <div className="icons text-white text-lg cursor-pointer h-3 w-3">
                                    <FaLinkedin />
                                </div>
                            </div>
                            {/* <div className="icon_wrapper ">
                                <div className="icons text-white text-lg cursor-pointer h-3 w-3">
                                    <FaFacebook />
                                </div>
                                <div className="icons absolute bottom-8 text-center  text-white text-lg cursor-pointer h-3 w-3">
                                    <FaFacebook />
                                </div>
                                <div className="icons absolute bottom-8 right-[36px] text-white text-lg cursor-pointer h-3 w-3">
                                    <FaFacebook />
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <h6 className='heading6 capitalize mt-[30px] mb-[2px]'>john smith</h6>
                    <Peragraph className='Label1 uppercase text-dark-blue-lite' text='ceo'/>
                </div>  
                <div className="item1 w-[296px] h-[344px] bg-sada flex flex-col items-center justify-center pt-12 pb-[32px] px-16">
                    <div className="meet_profile_hover profile_pic w-[168px] h-[168px] rounded-full overflow-hidden bg-black relative cursor-pointer">
                        <Image className='h-full w-full object-cover bg-no-repeat ' source={MeetImg} alt='not found'/>
                        <div className='meet_profile absolute left-0 top-[180px]  bg-gradient-to-t from-[#5339fab7] to-[#ffffff43] h-full w-full transition-all ease-in-out duration-1000 flex items-center justify-center'>
                            <div className="icon_main absolute bottom-6 h-[30px] w-[100px] flex items-center justify-center gap-6">
                                <div className="icons text-white text-lg cursor-pointer h-3 w-3">
                                    <FaFacebook />
                                </div>
                                <div className="icons text-white text-lg cursor-pointer h-3 w-3">
                                    <FaTwitter />
                                </div>
                                <div className="icons text-white text-lg cursor-pointer h-3 w-3">
                                    <FaLinkedin />
                                </div>
                            </div>
                            {/* <div className="icon_wrapper ">
                                <div className="icons text-white text-lg cursor-pointer h-3 w-3">
                                    <FaFacebook />
                                </div>
                                <div className="icons absolute bottom-8 text-center  text-white text-lg cursor-pointer h-3 w-3">
                                    <FaFacebook />
                                </div>
                                <div className="icons absolute bottom-8 right-[36px] text-white text-lg cursor-pointer h-3 w-3">
                                    <FaFacebook />
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <h6 className='heading6 capitalize mt-[30px] mb-[2px]'>john smith</h6>
                    <Peragraph className='Label1 uppercase text-dark-blue-lite' text='ceo'/>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default AboutMeet