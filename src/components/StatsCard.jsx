const StatsCard = ({ stat, subtext }) => {
    return (
        <div className="m-5">
            <p className="text-3xl font-bold py-1">{stat}</p>
            <p>{subtext}</p>
        </div>
    );
}

export default StatsCard;