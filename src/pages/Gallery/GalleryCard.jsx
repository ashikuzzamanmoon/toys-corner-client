import { motion } from 'framer-motion';

const GalleryCard = ({ toy }) => {
    const { img, name, price, ratings, likes } = toy;
    return (
        <motion.div
            className="bg-white rounded-lg shadow-md p-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <img className="w-full h-[550px] rounded-lg" src={img} alt="" />
            <div className="mt-2 mb-7 flex justify-between">
                <div>
                    <h2 className="text-2xl font-semibold">{name} <div className="badge badge-secondary">NEW</div></h2>
                    <p className="text-gray-600 mt-1 font-semibold text-xl">Price: {price}</p>
                </div>
                <div>
                    <p>{likes}</p>
                    <p>{ratings}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default GalleryCard;