
const ImageCard = ({ image_path, basis = "md:basis-5/6", rounded }) => {
    return (
        <div className={`basis-full ${basis}`}>
            <img src={image_path} alt="info" className={`${rounded} h-full w-full object-cover`} />
        </div>
    );
}

export default ImageCard;