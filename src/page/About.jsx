import Navbar from './Navbar';
import Footer from '../Components/navigation/Footer';

const About = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                    {/* Image Section */}
                    <div>
                        <img
                            src="https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg"
                            alt="TechBlogger illustration"
                            className="w-full h-[250px] md:h-[350px] object-cover"
                        />
                    </div>
                    {/* Content Section */}
                    <div className="border-[15px] border-green-300">
                        <div className="flex flex-col items-start p-2 gap-3">
                            <h2 className="text-3xl font-bold">Technobloger</h2>
                            <div className="text-base sm:text-lg font-medium w-[300px] sm:w-[400px] lg:w-[500px] 
                            xl:w-[520px] 2xl:w-[720px]">
                                <h1>Technobloger: Your Ultimate Technology Hub</h1>
                                <p>
                                    Technobloger is your go-to destination for the latest in technology. We offer comprehensive reviews, insightful articles, and up-to-date news on startups, gadgets, and tech trends. Our mission is to keep you informed and ahead in the fast-paced world of technology.
                                </p>
                                <h2 className='text-xl font-bold'>Why Choose Technobloger?</h2>
                                <p>
                                    At Technobloger, we understand the challenges of staying updated in an ever-evolving tech landscape. That’s why our team of experienced writers and tech enthusiasts works tirelessly to bring you the most relevant and accurate information. Whether you're a tech enthusiast, entrepreneur, or industry professional, Technobloger has something for everyone.
                                </p>

                                <h2 className='text-xl font-bold'>Our Offerings</h2>

                                <h3 className='text-xl font-bold'>1. Comprehensive Reviews</h3>
                                <p>Our in-depth reviews cover everything from the latest smartphones and laptops to cutting-edge gadgets and software. We provide:</p>
                                <ul className="list-disc pl-5">
                                    <li>Detailed analysis</li>
                                    <li>Pros and cons</li>
                                    <li>Real-world performance insights</li>
                                </ul>

                                <h3 className='text-xl font-bold'>2. Insightful Articles</h3>
                                <p>Stay ahead of the curve with articles exploring the latest trends and innovations in tech, such as:</p>
                                <ul className="list-disc pl-5">
                                    <li>Artificial Intelligence (AI)</li>
                                    <li>Blockchain</li>
                                    <li>Cybersecurity</li>
                                    <li>Internet of Things (IoT)</li>
                                </ul>

                                <h3 className='text-xl font-bold'>3. Up-to-Date News</h3>
                                <p>Never miss a beat with our real-time news coverage, including:</p>
                                <ul className="list-disc pl-5">
                                    <li>Announcements</li>
                                    <li>Product launches</li>
                                    <li>Industry developments</li>
                                </ul>

                                <h3 className='text-xl font-bold'>4. Startups and Innovations</h3>
                                <p>
                                    Discover emerging companies and groundbreaking technologies with the potential to disrupt industries and transform daily life.
                                </p>

                                <h3 className='text-xl font-bold'>5. Community and Engagement</h3>
                                <p>
                                    Join our vibrant community of tech enthusiasts and professionals. Participate in forums, comment sections, and discussions to connect with like-minded individuals and expand your knowledge.
                                </p>

                                <h3 className='text-xl font-bold'>6. Expert Opinions</h3>
                                <p>
                                    Gain insights from industry leaders and tech experts through exclusive interviews and opinion pieces.
                                </p>

                                <h3 className='text-xl font-bold'>7. Tutorials and How-Tos</h3>
                                <p>Enhance your skills with step-by-step guides tailored for:</p>
                                <ul className="list-disc pl-5">
                                    <li>Beginners learning the basics</li>
                                    <li>Advanced users mastering new techniques</li>
                                </ul>

                                <h3 className='text-xl font-bold'>8. Events and Conferences</h3>
                                <p>Stay informed about global tech events with:</p>
                                <ul className="list-disc pl-5">
                                    <li>Previews</li>
                                    <li>Live updates</li>
                                    <li>Post-event analysis</li>
                                </ul>

                                <h3 className='text-xl font-bold'>9. Technobloger Newsletter</h3>
                                <p>Subscribe to our newsletter to receive:</p>
                                <ul className="list-disc pl-5">
                                    <li>Latest updates</li>
                                    <li>Exclusive content</li>
                                    <li>Special offers</li>
                                </ul>
                                <p>Stay connected and never miss out on the latest in technology.</p>

                                <h2 className='text-xl font-bold'>Join Us on This Exciting Journey</h2>
                                <p>
                                    At Technobloger, we are passionate about technology and committed to delivering the best content possible. Let’s explore the ever-evolving world of tech together.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default About;
