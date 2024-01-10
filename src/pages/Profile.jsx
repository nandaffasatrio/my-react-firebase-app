// Profile.jsx
import React from "react";
import { useAuth } from "./useAuth";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      {user ? (
        <div className="user-info">
          <img src={user.photoURL} alt="Profile" />
          <div>
            <p>Name: {user.displayName}</p>
            <p>Email: {user.email}</p>
          </div>
        </div>
      ) : (
        <p>Please sign in to view your profile.</p>
      )}
    </div>
  );
};

export default Profile;
