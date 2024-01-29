export const ImageCard = ({ image_path }) => {
    return (
        <div className="basis-5/12">
            <img src={image_path} alt="info" className="rounded-lg" />
        </div>
    );
}