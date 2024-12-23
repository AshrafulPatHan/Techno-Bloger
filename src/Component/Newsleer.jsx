import React from 'react';
import { MdEmail } from 'react-icons/md';

const Newsleer = () => {
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
                            src="https://i.ibb.co/6NZyr8T/capsule-616x353.jpg"
                            className="w-full h-[250px] md:h-[300px] rounded-xl object-cover transition-transform 
                            transform hover:scale-105"
                            />
                    </div>
                    <div className='flex flex-col items-start p-2 gap-3'>
                        <h2 className='text-3xl font-semibold'>subscribe to our Newsleer</h2>
                        <p className='text-lg font-semibold'>subscribe to our Newsleer and stay update</p>
                        <label className="input input-bordered flex items-center gap-2">
                        <MdEmail />
                            <input type="text" className="grow" placeholder="Email" />
                        </label>
                        <button className='w-52 bg-blue-500 hover:bg-blue-300 p-2 text-lg 
                        text-white font-semibold rounded-xl'>
                            submits
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsleer;