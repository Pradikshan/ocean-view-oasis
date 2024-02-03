
const ImageCard = ({ image_path, rounded }) => {
    return (
        <div className="basis-full md:basis-5/6">
            <img src={image_path} alt="info" className={`${rounded} h-full w-full object-cover`} />
        </div>
    );
}

export default ImageCard;