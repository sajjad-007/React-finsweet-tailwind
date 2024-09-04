import React from 'react'
import HeadingOneImg from '../../../assets/images/feature/feature_hero.svg';
import Peragraph from '../../../components/peragraph/Peragraph';
import Button from '../../../components/button/Button';
import Image from '../../../components/Image';
import Div from '../../../components/div/Div'



const FeatureNeed = () => {
    let head1 = 'All the features you need'
    let pera1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
  return (
    <Div className='bg-primary py-section_padding'>
    <Div className="w-container my-0 mx-auto">
      <Div className="wrapper flex gap-16">
        <Div className="section1 flex flex-col gap-6 w-[582px]">
          <h1 className=' heading1 text-sada'>{head1}</h1>
          <Peragraph className='w-full text-sada' text={pera1}/>
          <Div className='btn_section flex gap-4'>
            <Button  className='nav_btn2' text='view our work' />
          </Div>
        </Div>
        <Div className="section2 w-[634px] overflow-hidden">
          <Image source={HeadingOneImg} alt='not found' className='image_style'/>
        </Div>
      </Div>
    </Div>      
</Div> 
  )
}

export default FeatureNeed