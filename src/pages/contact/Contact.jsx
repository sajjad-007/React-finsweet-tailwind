import React from 'react'
import Peragraph from '../../components/peragraph/Peragraph'
import ContactForm from './ContactForm'

const Contact = () => {
    let pera ='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
  return (
    <div className='py-32'>
        <div className='w-container my-0 mx-auto'>
            <div className="contact_head  text-center">
                <h2 className='heading2 capitalize'>contact us</h2>
                <Peragraph className='pera w-[519px] mx-auto mt-4 mb-16' text={pera}/>
            </div>
            <div className="">
                <ContactForm/>
            </div>
        </div>
    </div>
  )
}

export default Contact