import icon from "../../images/logo.svg";

const Profile = () => {
  return (
    <div className="profile">
      <div className="my--profile">
        <img className="icon" src={icon} alt="" />
        My Profile
      </div>
      <div className="group--chat">
        <img className="icon" src={icon} alt="" />
        Group Chat
      </div>
      <hr />
      <div className="logout">
        <img className="icon" value="Save" src={icon} alt="" />
        Logout
      </div>
    </div>
  );
};

export default Profile;
