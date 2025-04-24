import React from 'react';

const Mape = () => {
    return (
    <div className='flex flex-col items-center mt-10 mb-6'>
        <div>
            <div className='bitter-Title'>
                    <h2 className='text-4xl font-bold text-center mt-5 mb-3'>Our Office Location</h2>
            </div>
            <div className='flex flex-col items-center'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10783.992102962568!2d90.54988507335206!3d23.678412175187493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1734947532333!5m2!1sen!2sbd"
                    style={{ border: 0 }}
                    className='h-[350px] w-[300px] sm:w-[600px] md:w-[750px] lg:w-[1000px] '
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    </div>
    );
};

export default Mape;
