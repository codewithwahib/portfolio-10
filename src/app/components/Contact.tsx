import React from 'react'
import { MdAlternateEmail } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
            <h2 className='text-5xl' data-aos="zoom-in-left">To communicate</h2>
            <p className='text-white-400 text-[18px] pt-2' data-aos="zoom-in-left">
                Send me a message and I wil try to respond soon.
            </p>
            <div className='flex gap-3 items-center' data-aos="zoom-in-left">
            <MdAlternateEmail size={30} /> hassanjaffer043@gmail.com
            </div>
            <div className='flex gap-3 items-center' data-aos="zoom-in-left">
            <BiPhoneCall  size={30} /> 03XX-XXXXXXX

            </div>
        </div>
        <div className='space-y-8'>
            <div className='flex flex-col gap-1' data-aos="zoom-in-left">
                <label htmlFor="name">Name</label>
               <input type="text"
               className='h-[40px] bg-transparent border border-accent' 
               id='name'/>
            </div>
            <div className='flex flex-col gap-1' data-aos="zoom-in-left">
                <label htmlFor="email">Email</label>
               <input type="text"
               className='h-[40px] bg-transparent border border-accent' 
               id='email'/>
            </div>
            <div className='flex flex-col gap-1' data-aos="zoom-in-left">
                <label htmlFor="msg">Message</label>
               <textarea 
               className='bg-transparent border border-accent' 
               id='msg' rows={8}>
               </textarea>
            </div>
            <button className='bg-accent p-2 px-6' data-aos="zoom-in-left">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
