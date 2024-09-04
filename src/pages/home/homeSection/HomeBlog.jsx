import React from 'react'
import Image from '../../../components/Image'
import BlogImg from '../../../assets/images/home/image.jpg'
import Peragraph from '../../../components/peragraph/Peragraph'
import Button from '../../../components/button/Button'
import { FaArrowRightLong } from 'react-icons/fa6'

const HomeBlog = () => {
    let heading6 ="How one Webflow user grew his single person consultancy from $0-100K in 14 months"
    let pera1 = "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
  return (
    <div>
        <div className="w-container my-0 mx-auto">
            <div className="head mb-16">
                <h2 className='heading2'>Our blog</h2>
            </div>
            <div className="main_items flex flex-wrap gap-7 items-center justify-between">
                <div className="item_box w-[405px] h-auto">
                    <div className="img w-full h-72  mb-10 overflow-hidden bg-green-700">
                        <Image source={BlogImg} alt='not found' className='h-full w-full object-cover bg-no-repeat'/>
                    </div>
                    <div className="content flex flex-col gap-5">
                        <Peragraph className='label2' text='19 Jan 2022'/>
                        <h6 className='heading6 w-full'>{heading6}</h6>
                        <Peragraph className='pera' text={pera1}/>
                        <div>
                            <Button className='Label1 text-black flex items-center justify-center gap-5 capitalize' text='read more' Children={<FaArrowRightLong />}/>
                        </div>
                    </div>
                </div>
                <div className="item_box w-[405px] h-auto">
                    <div className="img w-full h-72  mb-10 overflow-hidden bg-green-700">
                        <Image source={BlogImg} alt='not found' className='h-full w-full object-cover bg-no-repeat'/>
                    </div>
                    <div className="content flex flex-col gap-5">
                        <Peragraph className='label2' text='19 Jan 2022'/>
                        <h6 className='heading6 w-full'>{heading6}</h6>
                        <Peragraph className='pera' text={pera1}/>
                        <div>
                            <Button className='Label1 text-black flex items-center justify-center gap-5 capitalize' text='read more' Children={<FaArrowRightLong />}/>
                        </div>
                    </div>
                </div>
                <div className="item_box w-[405px] h-auto">
                    <div className="img w-full h-72  mb-10 overflow-hidden bg-green-700">
                        <Image source={BlogImg} alt='not found' className='h-full w-full object-cover bg-no-repeat'/>
                    </div>
                    <div className="content flex flex-col gap-5">
                        <Peragraph className='label2' text='19 Jan 2022'/>
                        <h6 className='heading6 w-full'>{heading6}</h6>
                        <Peragraph className='pera' text={pera1}/>
                        <div>
                            <Button className='Label1 text-black flex items-center justify-center gap-5 capitalize' text='read more' Children={<FaArrowRightLong />}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeBlog