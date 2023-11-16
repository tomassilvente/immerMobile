interface UserInfoProps {
  userName: string;
  userImage: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ userName, userImage }) => {
  return (
    <div className="user-info flex items-center">
      {/* Display user image */}
      <img
        src={userImage}
        alt="User"
        className="user-image rounded-full h-10 w-10"
      />
      {/* Display user name */}
      <p className="user-name ml-2 font-medium text-white">{userName}</p>
    </div>
  );
};

export default UserInfo;
