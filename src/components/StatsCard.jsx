const StatsCard = ({ stat, subtext }) => {
    return (
        <div className="m-5">
            <p className="text-2xl font-bold py-3">{stat}</p>
            <p>{subtext}</p>
        </div>
    );
}

export default StatsCard;