import { motion } from 'framer-motion';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { BiLike }from 'react-icons/bi'

const GalleryCard = ({ toy }) => {
    const { img, name, price, ratings, likes, old_price } = toy;
    return (
        <motion.div
            className="bg-white rounded-lg shadow-md p-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <img className="w-full h-[550px] rounded-lg" src={img} alt="" />
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
                    <p className='text-gray-600 mt-1 font-semibold text-xl'>Ratings:
                        <Rating
                            placeholderRating={ratings}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        ></Rating>
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default GalleryCard;