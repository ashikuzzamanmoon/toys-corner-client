import { motion } from 'framer-motion';
import { BiLike } from 'react-icons/bi'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const GalleryCard = ({ toy }) => {
    const { img, name, price, ratings, likes, old_price } = toy;
    return (
        <motion.div
            className="bg-white rounded-lg shadow-md p-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <img className="w-full h-[380px] md:h-[550px] rounded-lg" src={img} alt="" />
            <div className="mt-2 mb-7 flex justify-between items-center">
                <div>
                    <p className="text-gray-600 mt-1 font-semibold text-xl line-through">Price: {old_price}</p>
                    <p className="text-gray-600 mt-1 font-semibold text-xl">Price: {price}</p>
                </div>
                <div>
                    <h2 className="text-3xl font-semibold">{name} <div className="badge badge-secondary">NEW</div></h2>
                </div>
                <div>
                    <p className='text-gray-600 font-semibold text-xl inline-flex items-center gap-2'> <BiLike></BiLike>Likes: {likes}</p>
                    <div className='text-gray-600 mt-1 font-semibold text-xl flex '>
                        Ratings:
                      

                        <Rating
                            style={{ maxWidth: 100 }}
                            value={ratings}
                              readOnly
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default GalleryCard;