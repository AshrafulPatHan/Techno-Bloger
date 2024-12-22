import React from 'react';
import { Link } from 'react-router';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Controls, Player } from '@lottiefiles/react-lottie-player';


const Error = () => {
    return (
        <>
        <div>
            <div className='flex flex-col items-center mt-3'>
                <h2 className='font-bold text-6xl'>Error 404</h2>
                <p className='font-bold text-xl'>Page is not found</p>
                <Link to='/' className='font-semibold text-xl text-sky-400'>Go Home</Link>
                <div>
                    <DotLottieReact
                    src="https://lottie.host/886d16e3-431f-4d3e-b4cc-5c757473b86a/iil8B5U7IH.lottie"
                    loop
                    autoplay
                    className=' w-[322px] sm:w-[600px] md:w-[750px] xl:w-[1200px]  '
                    />
                </div>
            </div>
        </div>
        </>
    );
};

export default Error;