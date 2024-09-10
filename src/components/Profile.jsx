import React from "react";


const Profile = () => {
  const profilePic =
    "/new-images/jonvon.jpg";
  return (
    <div className="hero bg-base-200 h-auto p-5">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={profilePic}
          className="max-w-sm rounded-lg shadow-2xl max-h-60"
        />
        <div>
          <h1 className="text-5xl font-bold">Jon Von Ivar Lita</h1>
          <p className="py-6">
            Bachelor of Science in Information Technology graduate, specializing
            in Front-end Web Development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
