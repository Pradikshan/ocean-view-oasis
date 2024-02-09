const ImageTile = ({ image_path }) => {
    return (
        <>
        <div>
            <img src={image_path} alt="tile" className="rounded-3xl md:w-52 md:h-80 object-cover"/>
        </div>
        </>
    );
}

export default ImageTile;