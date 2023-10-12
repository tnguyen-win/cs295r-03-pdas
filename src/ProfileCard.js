const ProfileCard = ({ title, handle, image, description }) => {
    return (
        <div className="card shadow-lg m-3">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text"><small className="text-body-secondary">{handle}</small></p>
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
};

export default ProfileCard;
