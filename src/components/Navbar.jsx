// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";

const Navbar = () => {
  const { user, signOut, signInWithGoogle } = useAuth();

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          Your Logo
        </Link>

        <div className="nav-links">
          {user ? (
            <>
              <div className="profile-info">
                <img src={user.photoURL} alt="Profile" />
                <span>{user.displayName}</span>
              </div>
              <button onClick={signOut}>Sign Out</button>
            </>
          ) : (
            <button onClick={signInWithGoogle}>Sign In with Google</button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
