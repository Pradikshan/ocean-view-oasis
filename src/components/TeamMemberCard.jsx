const TeamMemberCard = ({ image_path, name, position }) => {
    return (
        <div className="flex flex-col place-items-center my-5">
            <img src={image_path} alt="team member" className="w-24 h-24 rounded-full object-cover" />
            <p className="font-bold text-center">{name}</p>
            <p>{position}</p>
        </div>

    );
}

export default TeamMemberCard;