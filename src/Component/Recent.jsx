import React from 'react';

const Recent = () => {
    return (
        <div>
            <div className='flex flex-col items-center gap-4 mt-6'>
                <div className='bitter-Title'>
                    <h2 className='text-4xl font-semibold text-center mb-3'>Recent Blog Posts</h2>
                </div>
                {/* card */}
                <div className='grid grid-cols-1 xl:grid-cols-2 gap-2'>
                    <div className='flex flex-col md:flex-row items-start gap-3 border-2 text-lg border-blue-50 p-5 
                    rounded-xl transition-transform transform hover:-translate-y-2 hover:shadow-lg
                    bg-slate-50'>
                        <div>
                            <img src="https://github.blog/wp-content/uploads/2024/02/Copilot-Enterprise-Blog-Header.png?resize=1600%2C850" 
                            className=" h-[250px] md:h-[300px] w-[300px]  md:w-[600px]
                            rounded-xl object-cover 
                            transition-transform transform hover:scale-105"
                            alt="photo" />
                        </div>
                        <div className='flex flex-col ml-2 items-start'>
                            <h4 className='text-2xl font-semibold'>Title</h4>
                            <p className='text-lg font-semibold'>This is the description</p>
                            <div className='flex flex-row items-center gap-3'>
                                <button className='border-2 text-lg border-green-300 w-28 text-sky-400 
                                hover:bg-green-300 p-2'>
                                    Details
                                </button>
                                <button className='border-2 text-lg border-green-300 w-28 text-sky-400 hover:bg-green-300 p-2'>
                                    Wishlist
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-start gap-3 border-2 text-lg border-blue-50 p-5 
                    rounded-xl transition-transform transform hover:-translate-y-2 hover:shadow-lg
                    bg-slate-50
                    '>
                        <div>
                            <img src="https://itknowledgezone.com/wp-content/uploads/2023/02/Will-ChatGPT-take-over-the-digital-world.jpg" 
                            className="h-[250px] md:h-[300px] w-[300px]  md:w-[600px] rounded-xl object-cover transition-transform transform hover:scale-105"
                            alt="photo" />
                        </div>
                        <div className='flex flex-col ml-2 items-start'>
                            <h4 className='text-2xl font-semibold'>Title</h4>
                            <p className='text-lg font-semibold'>This is the description</p>
                            <div className='flex flex-row items-center gap-3'>
                                <button className='border-2 text-lg border-green-300 w-28 text-sky-400 
                                hover:bg-green-300 p-2'>
                                    Details
                                </button>
                                <button className='border-2 text-lg border-green-300 w-28 text-sky-400 hover:bg-green-300 p-2'>
                                    Wishlist
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-start gap-3 border-2 text-lg border-blue-50 p-5 
                    rounded-xl transition-transform transform hover:-translate-y-2 hover:shadow-lg
                    bg-slate-50
                    '>
                        <div>
                            <img src="https://www.eway-crm.com/wp-content/uploads/2023/12/Copilot-studio_Obalka.jpg" 
                            className="h-[250px] md:h-[300px] w-[300px]  md:w-[600px] rounded-xl object-cover transition-transform transform hover:scale-105"
                            alt="photo" />
                        </div>
                        <div className='flex flex-col ml-2 items-start'>
                            <h4 className='text-2xl font-semibold'>Title</h4>
                            <p className='text-lg font-semibold'>This is the description</p>
                            <div className='flex flex-row items-center gap-3'>
                                <button className='border-2 text-lg border-green-300 w-28 text-sky-400 
                                hover:bg-green-300 p-2'>
                                    Details
                                </button>
                                <button className='border-2 text-lg border-green-300 w-28 text-sky-400 hover:bg-green-300 p-2'>
                                    Wishlist
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-start gap-3 border-2 text-lg border-blue-50 p-5 
                    rounded-xl transition-transform transform hover:-translate-y-2 hover:shadow-lg
                    bg-slate-50
                    '>
                        <div>
                            <img src="https://imageio.forbes.com/specials-images/imageserve/675b55f62e8f078fc71b1fa0/0x0.jpg?format=jpg&crop=3524,1981,x0,y0,safe&height=900&width=1600&fit=bounds" 
                            className="h-[250px] md:h-[300px] w-[300px]  md:w-[600px] rounded-xl object-cover transition-transform transform hover:scale-105"
                            alt="photo" />
                        </div>
                        <div className='flex flex-col ml-2 items-start'>
                            <h4 className='text-2xl font-semibold'>Title</h4>
                            <p className='text-lg font-semibold'>This is the description</p>
                            <div className='flex flex-row items-center gap-3'>
                                <button className='border-2 text-lg border-green-300 w-28 text-sky-400 
                                hover:bg-green-300 p-2'>
                                    Details
                                </button>
                                <button className='border-2 text-lg border-green-300 w-28 text-sky-400 hover:bg-green-300 p-2'>
                                    Wishlist
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-start gap-3 border-2 text-lg border-blue-50 p-5 
                    rounded-xl transition-transform transform hover:-translate-y-2 hover:shadow-lg
                    bg-slate-50
                    '>
                        <div>
                            <img src="https://www.innovationnewsnetwork.com/wp-content/uploads/2024/12/shutterstock_1287557662.jpg" 
                            className="h-[250px] md:h-[300px] w-[300px]  md:w-[600px] rounded-xl object-cover transition-transform transform hover:scale-105"
                            alt="photo" />
                        </div>
                        <div className='flex flex-col ml-2 items-start'>
                            <h4 className='text-2xl font-semibold'>Title</h4>
                            <p className='text-lg font-semibold'>This is the description</p>
                            <div className='flex flex-row items-center gap-3'>
                                <button className='border-2 text-lg border-green-300 w-28 text-sky-400 
                                hover:bg-green-300 p-2'>
                                    Details
                                </button>
                                <button className='border-2 text-lg border-green-300 w-28 text-sky-400 hover:bg-green-300 p-2'>
                                    Wishlist
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-start gap-3 border-2 text-lg border-blue-50 p-5 
                    rounded-xl transition-transform transform hover:-translate-y-2 hover:shadow-lg
                    bg-slate-50
                    '>
                        <div>
                            <img src="https://i0.wp.com/spacenews.com/wp-content/uploads/2024/04/vast-starlink.jpg?fit=1920%2C1080&quality=89&ssl=1" 
                            className="h-[250px] md:h-[300px] w-[300px]  md:w-[600px] rounded-xl object-cover transition-transform transform hover:scale-105"
                            alt="photo" />
                        </div>
                        <div className='flex flex-col ml-2 items-start'>
                            <h4 className='text-2xl font-semibold'>Title</h4>
                            <p className='text-lg font-semibold'>This is the description</p>
                            <div className='flex flex-row items-center gap-3'>
                                <button className='border-2 text-lg border-green-300 w-28 text-sky-400 
                                hover:bg-green-300 p-2'>
                                    Details
                                </button>
                                <button className='border-2 text-lg border-green-300 w-28 text-sky-400 hover:bg-green-300 p-2'>
                                    Wishlist
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recent;