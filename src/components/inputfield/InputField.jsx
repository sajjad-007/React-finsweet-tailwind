import React from 'react'

const InputField = () => {
  return (
    <div className=' mt-10 flex flex-col gap-4'>
        <div>
            <input type="text" id="first_name" class="bg-transparent border border-[#ffffff0d] text-sada text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name" required />
        </div>
        <div >
            <input type="email" id="email" class="bg-transparent border border-[#ffffff0d] text-sada text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
        </div>
        <div>
            <input type="url" id="website" class="bg-transparent border border-[#ffffff0d] text-sada text-lg rounded-lg focus:ring-[#ffffff0d] focus:border-[#ffffff0d] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Paste your Figma design URL" required />
        </div>
        
    </div>
  )
}

export default InputField