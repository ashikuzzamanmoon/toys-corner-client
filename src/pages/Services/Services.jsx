import { RxCounterClockwiseClock } from 'react-icons/rx';
import { GoKey } from 'react-icons/go';
import { BsRocketFill } from 'react-icons/bs';
import { TbSunHigh } from 'react-icons/tb';

const Services = () => {
    return (
        <div>
            <h2 className="text-5xl font-bold text-center mb-12">Our Services</h2>
            <div className="border text-black mb-12">
                <div className=' flex flex-col md:flex-row justify-between items-center px-20 py-14'>
                    <div className='w-64 text-center space-y-6'>
                        <div className='flex justify-center mt-5'>
                            <RxCounterClockwiseClock className='h-20 w-20 text-center'></RxCounterClockwiseClock>
                        </div>
                        <h2 className='text-2xl font-bold'>Fast Delivery</h2>
                        <p>Find taking of information and other details from Your Orders.</p>
                    </div>
                    <div className='w-64 text-center space-y-6'>
                        <div className='flex justify-center mt-5'>
                            <GoKey className='h-20 w-20 text-center'></GoKey>
                        </div>
                        <h2 className='text-2xl font-bold'>Save Money</h2>
                        <p>Save $5 every year compared to the monthly plan by paying yearly.</p>
                    </div>
                    <div className='w-64 text-center space-y-6'>
                        <div className='flex justify-center mt-5'>
                            <BsRocketFill className='h-20 w-20 text-center'></BsRocketFill>
                        </div>
                        <h2 className='text-2xl font-bold'>Fast Returns</h2>
                        <p>Money back. If the item did not suit you.</p>
                    </div>
                    <div className='w-64 text-center space-y-6'>
                        <div className='flex justify-center mt-5'>
                            <TbSunHigh className='h-20 w-20 text-center'></TbSunHigh>
                        </div>
                        <h2 className='text-2xl font-bold'>Online Support</h2>
                        <p>Use our 24/7 customer hotline so you are not alone if you have a question.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;