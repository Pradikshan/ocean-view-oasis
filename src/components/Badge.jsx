const Badge = ({ text }) => {
    return (
        <div className="w-40 rounded-full p-3 m-3 shadow-2xl bg-slate-600">
            <p className="text-center text-white text-md md:text-sm font-bold">{text}</p>
        </div>
    );
}

export default Badge;