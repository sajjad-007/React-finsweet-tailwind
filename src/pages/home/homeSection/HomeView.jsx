import React from 'react'
import Button from '../../../components/button/Button'
import { FaArrowRightLong } from 'react-icons/fa6'

const HomeView = () => {
    let pera1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
  return (
    <div className='py-section_padding'>
        <div className='w-container mx-auto my-0'>
          <div className="heading_section flex items-center justify-between">
            <h2 className='heading2'>View our projects</h2>
            <div>
                <Button className='Label1 flex items-center justify-center gap-5 text-black' text='view more' Children={<FaArrowRightLong />}/>
              </div>
          </div>
          <div className="view_item_section mt-16 flex gap-8">
            <div className="view_item1 w-[843px]">
              
            </div>
            <div className="view_item2 w-[405px]"></div>
          </div>
        </div>
    </div>
  )
}

export default HomeView