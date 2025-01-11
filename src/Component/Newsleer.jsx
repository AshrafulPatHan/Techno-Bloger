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
            <div className='flex flex-col items-center'>
                <div className='bitter-Title'>
                    <h4 className='text-4xl font-semibold text-center mt-6 mb-3'>Newsleer</h4>
                </div>
                <div className='flex flex-col lg:flex-row items-start gap-3 border-2 text-lg border-blue-50 p-5 
                    rounded-xl bg-slate-50 sm:w-[60%] w-[90%] '>
                    <div>
                        <img
                            src="https://www.goldcoastbridgeclub.com/TinyFileManager/resources/files/55///newsletter1.png"
                            className="w-full h-[250px] md:h-[300px] rounded-xl object-cover transition-transform 
                            transform hover:scale-105"
                            />
                    </div>
                    <div className='flex flex-col items-start p-2 gap-3'>
                        <h2 className='text-3xl font-semibold'>subscribe to our Newsleer</h2>
                        <p className='text-lg font-semibold'>subscribe to our Newsleer and stay update</p>
                        <form onSubmit={handelSubmit} className='flex flex-col items-start gap-3'>
                            <label className="input input-bordered flex items-center gap-2">
                            <MdEmail />
                                <input type="email" name='email' className="grow w-[200px] sm:w-[300px] " placeholder="Email" />
                            </label>
                            <div className='flex flex-row items-center gap-2'>
                                <button className='w-52 bg-blue-500 hover:bg-blue-300 
                                p-2 text-lg text-white font-semibold rounded-xl'>
                                    submits
                                </button>
                                {/* Framer motion */}
                                <div className='flex flex-col items-center'>
                                    <AnimatePresence initial={false}>
                                        {isVisible ? (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0 }}
                                                key="box"
                                            />
                                        ) : null}
                                    </AnimatePresence>
                                    <motion.button
                                        className='text-4xl'
                                        onClick={() => setIsVisible(!isVisible)}
                                        whileTap={{ y: 1 }}
                                    >
                                        {isVisible ? <BiLike /> : <BiSolidLike />}
                                    </motion.button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsleer;