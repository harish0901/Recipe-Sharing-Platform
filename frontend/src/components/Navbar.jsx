import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import "./Navbar.css";

const Navbar = ({ isLoggedIn, setIsLoggedIn, searchQuery, setSearchQuery, showSearchBar }) => {
  const navigate = useNavigate();  // ✅ Hook for navigation

  const handleLogout = () => {
    localStorage.removeItem("token");  // ✅ Remove authentication token
    setIsLoggedIn(false);  // ✅ Update login state
    navigate("/login");  // ✅ Redirect to login page
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark"> {/* Changed to bg-dark */}
      <div className="container-fluid">
        {/* Left-aligned links */}
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto"> {/* Added me-auto to push items to the left */}
            <li className="nav-item"><a className="nav-link fw-bold text-light" href="/">HOME</a></li>
            <li className="nav-item"><a className="nav-link fw-bold text-light" href="/about">ABOUT US</a></li>
            <li className="nav-item"><a className="nav-link fw-bold text-light" href="/recipes">CREATE NEW RECIPES</a></li>
          </ul>
        </div>

        {/* Centered heading with minimal or no margin */}
        <div className="d-flex justify-content-start flex-grow-1" style={{ marginLeft: '0' }}> {/* Removed marginLeft */}
          <a className="navbar-brand fs-3 fw-light" href="/">
            <span style={{ color: "WHITE" }}>RECIZZ</span>
            
          </a>
        </div>

        {/* Login/Register or Logout Button */}
        <div className="d-flex align-items-center">
          {!isLoggedIn ? (
            <>
              <a className="text-light" href="/login">LOGIN</a>
              <span className="fw-bold text-light">/</span>
              <a className="text-light ms-2 fw-bold" href="/register">REGISTER</a>
            </>
          ) : (
            <button className="logout" onClick={handleLogout}>
              LOGOUT 
            </button>
          )}

          {showSearchBar && (
            <div className="d-flex align-items-center ms-3">
              <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search Recipes..."
                  aria-label="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="search" type="submit">
                  <i className="bi bi-search text-light"></i>
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;