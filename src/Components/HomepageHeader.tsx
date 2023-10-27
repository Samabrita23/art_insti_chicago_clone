import React, { useEffect, useState } from "react";
import RedLogo from "../Assets/RedLogo.svg";
import HomePageBackground from "../Assets/HomePageBackground.svg";
import "../Styles/HomepageHeader.css";
import { FaSearch } from "react-icons/fa";
import ExhibitionCard from "./ExhibitionBanner";

// HomepageHeader component definition
const HomepageHeader = () => {
  // State to track scrolling direction
  const [scrollingUp, setScrollingUp] = useState(true);

  // Effect to handle scroll events and update scrollingUp state
  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      // Calculating current scroll position
      const currentPosition =
        window.scrollY || document.documentElement.scrollTop;
      // Updating scrollingUp state based on scroll position
      setScrollingUp(
        currentPosition < (window.scrollY || document.documentElement.scrollTop)
      );
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // To render the component
  return (
    <div className="header-container">
      <div className="home-image">
        {/* Background image */}
        <img
          src={HomePageBackground}
          loading="lazy"
          alt="A person sits at a table in a study-like room stringing objects—flowers, leaves, vegetables, crystals, scraps of paper with mathematical equations—onto a three-dimensional musical staff. Figures emerging from the wall do the same, while the floor's tiles come loose, drawers overflow, and birds nest in the back of a chair."
          style={{ width: "100%", height: "95vh", objectFit: "cover" }}
        />

        <div className="top-header">
          <div className="header-wrapper">
            {/* Logo */}
            <img
              src={RedLogo}
              alt="Art Institute of Chicago"
              loading="lazy"
              className="logo"
            />

            <div className="header-navbar">
              {/* Secondary navigation links */}
              <div className="secondary-navbar">
                <a href="#Buy Tickets">Buy Tickets</a>
                <a href="#Become a member">Become a member</a>
                <a href="#Shop">Shop</a>
              </div>

              {/* Primary navigation links with search icon */}
              <div className="primary-navbar">
                <a href="#Visit">Visit</a>
                <a href="#Exhibitions & Events">Exhibitions & Events</a>
                <a href="#The Collection">The Collection</a>
                <FaSearch className="search-icon" />
              </div>
            </div>
          </div>
        </div>

        {/* To Render ExhibitionCard component */}
        <ExhibitionCard />
      </div>
    </div>
  );
};

export default HomepageHeader;
