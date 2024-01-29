export const ImageCard = ({ image_path }) => {
    return (
        <div className="basis-full md:basis-5/6">
            <img src={image_path} alt="info" className="rounded-lg h-full w-full" />
        </div>
    );
}