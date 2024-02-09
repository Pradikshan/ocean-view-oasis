const TextCard = ({ heading, text }) => {
    return (
        <div className="w-96 my-10">
            <p className="text-xl font-bold">{heading}</p>
            <p className="mt-2">{text}</p>
        </div>
    );
}

export default TextCard;