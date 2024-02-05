const IconText = ({ icon, text }) => {

    return (
        <div className="flex flex-row mt-3 md:mt-1">
            <div className="text-2xl items-center pe-1">
                {icon}
            </div>
            <div>
                {text}
            </div>
        </div>
    );
}

export default IconText;