

const GalleryCard = ({toy}) => {
    const {img,} = toy;
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default GalleryCard;