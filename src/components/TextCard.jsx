const TextCard = ({ heading, text }) => {
    return (
        <div>
            <p className="text-xl font-bold">{heading}</p>
            <p className="mt-2">{text}</p>
        </div>
    );
}

export default TextCard;