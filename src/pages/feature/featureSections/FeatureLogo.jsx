import React from 'react'
import AboutSvg from '../../../components/svg/AboutSvg'
import AboutSvg2 from '../../../components/svg/AboutSvg2'
import Peragraph from '../../../components/peragraph/Peragraph'
import Div from '../../../components/div/Div'

const FeatureLogo = () => {
  return (
    <Div className='my-24'>
        <Div className="w-container my-0 mx-auto">
            <Div className='mt-12 flex flex-wrap gap-20 items-center'>
                <Div className="count flex flex-col w-44">
                    <h3 className='heading3 text-dark-blue'>100.000+</h3>
                    <Peragraph className=" Label1 capitalize text-dark-blue-lite" text='finsweet users'/>
                </Div>
                <Div className="logo w-[1024px] flex flex-wrap gap-14">
                    <Div className="logo_item w-40 h-8 overflow-hidden">
                        <AboutSvg/>
                    </Div>
                    <Div className="logo_item w-40 h-8 overflow-hidden">
                        <AboutSvg2/>
                    </Div>
                    <Div className="logo_item w-40 h-8 overflow-hidden">
                        <AboutSvg/>
                    </Div>
                    <Div className="logo_item w-40 h-8 overflow-hidden">
                        <AboutSvg2/>
                    </Div>
                    <Div className="logo_item w-40 h-8 overflow-hidden">
                        <AboutSvg/>
                    </Div>
                </Div>
            </Div>
        </Div>
    </Div>
  )
}

export default FeatureLogo