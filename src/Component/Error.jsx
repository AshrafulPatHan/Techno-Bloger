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
                <nav className="md:place-self-center md:justify-self-end">
                    <div className='text-5xl flex flex-row items-center gap-0 '>
                        <div>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands text-2xl  fa-facebook" style={{ color: '#4267B2', marginRight: '10px' }}></i>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands text-2xl  fa-twitter" style={{ color: '#1DA1F2', marginRight: '10px' }}></i>
                        </a>
                        </div>
                        <div>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands  text-2xl fa-instagram" style={{ color: '#E1306C', marginRight: '10px' }}></i>
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands  text-2xl fa-linkedin" style={{ color: '#4267B2', marginRight: '10px' }}></i>
                        </a>
                        </div>
                        <div>
                        <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands  text-2xl fa-x-twitter"></i>
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands  text-2xl fa-youtube" style={{ color: '#E1306C', marginRight: '10px' }}></i>
                        </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        </>
    );
};

export default Error;