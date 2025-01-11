import { MdEmail } from "react-icons/md";
import { Link } from "react-router";


const AboutUs = () => {
    return (
        <div className="flex flex-col items-center mt-6 mb-16">
            <div className='bitter-Title'>
                <h2 className="text-4xl font-bold mb-3">About US</h2>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className='flex flex-col lg:flex-row items-start gap-3 border-2 text-lg border-blue-50 p-5 
                    rounded-xl bg-slate-50 sm:w-[80%] w-[90%] '>
                    <div>
                        <img
                            src="https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg"
                            className="w-full h-[250px] md:h-[350px] rounded-xl object-cover transition-transform 
                            transform hover:scale-105"
                            />
                    </div>
                    <div className='flex flex-col items-start p-2 gap-3'>
                        <h2 className="text-2xl font-bold">Technobloger</h2>
                        <p className=' text-base sm:text-lg font-medium w-[300px] sm:w-[400px] 
                        lg:w-[500px] xl:w-[520px] 2xl:w-[720px]   '>Technobloger is your ultimate destination for the latest in technology. We provide comprehensive reviews, insightful articles, and up-to-date news on startups, gadgets, and tech trends. Whether you re a tech enthusiast, entrepreneur, or industry professional, technobloger keeps you informed and ahead in the fast-paced world of technology....</p>
                        <Link to='/about' className="btn rounded-none bg-transparent relative w-32 origin-top transform border-2 border-sky-500 
                        text-lg font-semibold text-sky-500 
                        before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-sky-500">About US
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;