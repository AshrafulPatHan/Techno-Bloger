import React, { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { toast } from 'react-toastify';
import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";



const Newsleer = () => {
    const [isVisible, setIsVisible] = useState(true)
    const handelSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            toast.success("Subscription successful!");
        } else {
            toast.error("Please enter a valid email address");
        }
    }


    return (
        <div>
            <div className='flex flex-col items-center mb-24'>
                <div className='bitter-Title'>
                    <h4 className='text-4xl font-semibold text-center mt-24 mb-9'>Newsleer</h4>
                </div>
                <div className='flex flex-col lg:flex-row gap-3 border-2 text-lg border-blue-50 p-5 
                    rounded-xl bg-slate-50 dark:bg-[#111010] '>
                    <div >
                        <img
                            src="https://i.ibb.co.com/q3wxqxKd/news-530220-640.jpg"
                            className="w-[90vw] sm:w-[300px]  rounded-xl object-cover transition-transform 
                            transform hover:scale-105"
                            />
                    </div>
                    <div className='flex flex-col items-start p-2 gap-3'>
                        <h2 className='text-3xl font-semibold'>subscribe to our Newsleer</h2>
                        <p className='text-lg font-semibold'>subscribe to our Newsleer and stay update</p>
                        <form onSubmit={handelSubmit} className='flex flex-col sm:flex-row items-start gap-3'>
                            <label className="input input-bordered flex items-center gap-2">
                                <MdEmail />
                                <input type="email" name='email' className="grow w-[200px] rounded-none sm:w-[300px] " placeholder="Email" />
                            </label>
                            <div className='flex flex-row items-center gap-2'>
                                <button to='/about' className="btn rounded-none bg-transparent relative w-40 origin-top transform border-2 border-sky-500 
                                text-lg font-semibold text-sky-500 
                                before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-sky-500">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsleer;