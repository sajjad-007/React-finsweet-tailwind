import React from 'react'
import Button from '../../components/button/Button'


const ContactForm = () => {
  return (
    
    
    <form className='contact_form px-14 py-20 bg-accent rounded-md w-[992px] mx-auto'>
        <div className="flex flex-wrap gap-10 ">
            <div >
                <label for="first_name" class="block mb-2 text-lg font-semibold leading-[28px] text-black dark:text-white">First name</label>
                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-black text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[420px] py-4 px-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name" required />
            </div>
            <div class="mb-6">
                <label for="email" class="block mb-2 text-lg font-semibold leading-[28px] text-black dark:text-white">Email address</label>
                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[420px] py-4 px-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
            </div> 
            <div >
                <label for="first_name" class="block mb-2 text-lg font-semibold leading-[28px] text-black dark:text-white">Subject</label>
                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-black text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[420px] py-4 px-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name" required />
            </div>
            <div >
                <label for="first_name" class="block mb-2 text-lg font-semibold leading-[28px] text-black dark:text-white">Subject</label>
                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-black text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[420px] py-4 px-8 dark:bg-gray-700 dark:border-gray-600  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cap" placeholder="Enter your name" required />
            </div>
            <div> 
                <label for="message" class="block mb-2 text-lg font-semibold leading-[28px] text-black dark:text-white capitalize">message</label>
                <textarea id="message" rows="4" class="block p-2.5 w-[880px] h-[200px] text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 placeholder-black dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your message here..."></textarea>
            </div>
            
        </div> 
        <Button type='submit' text='send message' className="mt-10 text-white bg-black hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[41px] text-lg  sm:w-auto px-16 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 capitalize"/>
    </form>


  )
}

export default ContactForm