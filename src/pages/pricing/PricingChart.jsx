import React from 'react'
 import Span from '../../components/span/Span'
import { IoLogoGooglePlaystore } from 'react-icons/io5'
import Button from '../../components/button/Button'
import './pricing.css'
import Ul from '../../components/ul/Ul'
import List from '../../components/List/List'
import Div from '../../components/div/Div'
import Peragraph from '../../components/peragraph/Peragraph'


const PricingChart = () => {
    let pera1 = "When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them."
    let pera2 = "When you’re ready to go beyond prototyping in Figma, "
  return (
    <Div className='py-32 '>
        <Div className="w-container my-0 mx-auto">
            <Div className="content_part flex flex-col gap-4 text-center">
                <h2 className='heading2 text-dark-blue'>our pricing part</h2>
                <Peragraph className='pera w-[562px] mx-auto' text={pera1}/>
            </Div>
            <Div className="cart_section mt-16 flex flex-wrap gap-[31px]">
                <Div className="cart_item w-[406px] h-auto py-16 pr-[77px] pl-[48px] bg-pera rounded-xl flex flex-col transition-all ease-linear duration-300">
                    <Div className="head_section flex gap-2 items-center">
                        <Span className='heading3 text-dark-blue group-hover:text-white' text='$299'/>
                        <Peragraph className='Label1 capitalize' text='per design'/>
                    </Div>
                    <Div className="sub_section mt-5 ">
                            <h6 className='heading6 mb-2'>landing page</h6>
                            <Peragraph className='pera' text={pera2}/>
                    </Div>
                    <Div className="lists_section mt-20">
                        <Ul className='flex flex-col gap-6'>
                                <List className='flex gap-3 items-center'>
                                    <IoLogoGooglePlaystore className='text-green' />
                                    <Peragraph className='Label1 text-dark-blue' text='All limited links'/>
                                </List>
                                <List className='flex gap-3 items-center'>
                                    <IoLogoGooglePlaystore className='text-green' />
                                    <Peragraph className='Label1 text-dark-blue' text='Unlimited users'/>
                                </List>
                                <List className='flex gap-3 items-center'>
                                    <IoLogoGooglePlaystore className='text-green' />
                                    <Peragraph className='Label1 text-dark-blue' text='Own analytics platform'/>
                                </List>
                                <List className='flex gap-3 items-center'>
                                    <IoLogoGooglePlaystore className='text-green' />
                                    <Peragraph className='Label1 text-dark-blue' text='Chat support'/>
                                </List>
                                <List className='flex gap-3 items-center'>
                                    <IoLogoGooglePlaystore className='text-green' />
                                    <Peragraph className='Label1 text-dark-blue' text='Optimize hashtags'/>
                                </List>
                        </Ul>   
                    </Div>
                    <Div className="btn mt-20 text-center">
                            <Button className='nav_btn3' type='submit' text='get started'/>
                    </Div>
                </Div>
                <Div className="cart_item w-[406px] h-auto py-16 pr-[77px] pl-[48px] bg-primary rounded-xl flex flex-col transition-all ease-linear duration-300">
                    <Div className="head_section flex gap-2 items-center">
                        <Span className='heading3 text-white' text='$399'/>
                        <Peragraph className='Label1 capitalize text-yellow' text='multi design'/>
                    </Div>
                    <Div className="sub_section mt-5 ">
                            <h6 className='heading6 mb-2 text-sada'>website page</h6>
                            <Peragraph className='pera text-sada' text={pera2}/>
                    </Div>
                    <Div className="lists_section mt-20">
                        <Ul className='flex flex-col gap-6'>
                            <List className='flex gap-3 items-center'>
                                <IoLogoGooglePlaystore className='text-green' />
                                <Peragraph className='Label1 text-sada' text='All limited links'/>
                            </List>
                            <List className='flex gap-3 items-center'>
                                <IoLogoGooglePlaystore className='text-green' />
                                <Peragraph className='Label1 text-sada' text='Unlimited users'/>
                            </List>
                            <List className='flex gap-3 items-center'>
                                <IoLogoGooglePlaystore className='text-green' />
                                <Peragraph className='Label1 text-sada' text='Own analytics platform'/>
                            </List>
                            <List className='flex gap-3 items-center'>
                                <IoLogoGooglePlaystore className='text-green' />
                                <Peragraph className='Label1 text-sada' text='Chat support'/>
                            </List>
                            <List className='flex gap-3 items-center'>
                                <IoLogoGooglePlaystore className='text-green' />
                                <Peragraph className='Label1 text-sada' text='Optimize hashtags'/>
                            </List>
                        </Ul>    
                    </Div>
                    <Div className="btn mt-20 text-center">
                            <Button className='nav_btn2' type='submit' text='get started'/>
                    </Div>
                </Div>
                <Div className="cart_item w-[406px] h-auto py-16 pr-[77px] pl-[48px] bg-pera rounded-xl flex flex-col transition-all ease-linear duration-300">
                    <Div className="head_section flex gap-2 items-center">
                        <Span className='heading3 text-dark-blue group-hover:text-white' text='$499 +'/>
                        <Peragraph className='Label1 capitalize' text='per design'/>
                    </Div>
                    <Div className="sub_section mt-5 ">
                            <h6 className='heading6 mb-2'>complex project</h6>
                            <Peragraph className='pera' text={pera2}/>
                    </Div>
                    <Div className="lists_section mt-20">
                        <Ul className='flex flex-col gap-6'>
                            <List className='flex gap-3 items-center'>
                                <IoLogoGooglePlaystore className='text-green' />
                                <Peragraph className='Label1 text-dark-blue' text='All limited links'/>
                            </List>
                            <List className='flex gap-3 items-center'>
                                <IoLogoGooglePlaystore className='text-green' />
                                <Peragraph className='Label1 text-dark-blue' text='Unlimited users'/>
                            </List>
                            <List className='flex gap-3 items-center'>
                                <IoLogoGooglePlaystore className='text-green' />
                                <Peragraph className='Label1 text-dark-blue' text='Own analytics platform'/>
                            </List>
                            <List className='flex gap-3 items-center'>
                                <IoLogoGooglePlaystore className='text-green' />
                                <Peragraph className='Label1 text-dark-blue' text='Chat support'/>
                            </List>
                            <List className='flex gap-3 items-center'>
                                <IoLogoGooglePlaystore className='text-green' />
                                <Peragraph className='Label1 text-dark-blue' text='Optimize hashtags'/>
                            </List>
                        </Ul> 
                    </Div>
                    <Div className="btn mt-20 text-center">
                            <Button className='nav_btn3' type='submit' text='get started'/>
                    </Div>
                </Div>
            </Div>
        </Div>
    </Div>
  )
}

export default PricingChart