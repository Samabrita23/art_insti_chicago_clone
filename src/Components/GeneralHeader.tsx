import React, { useEffect, useState } from "react";
import WhiteLogo from "../Assets/WhiteLogo.svg";
import "../Styles/HomepageHeader.css";
import "../Styles/GeneralHeader.css";


// HomepageHeader component definition
const GeneralHeader = () => {
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


    return(

        <div className="top-head">
          <div className="header-wrap">
            {/* Logo */}
            <img
              src={WhiteLogo}
              alt="Art Institute of Chicago"
              loading="lazy"
              className="logo"
            />

            <div className="header-nav">
              {/* Secondary navigation links */}
              <div className="secondary-nav">
                <a href="#Buy Tickets">Buy Tickets</a>
                <a href="#Become a member">Become a member</a>
                <a href="#Shop">Shop</a>
              </div>

              {/* Primary navigation links with search icon */}
              <div className="primary-nav">
                <a href="#Visit">Visit</a>
                <a href="#Exhibitions & Events">Exhibitions & Events</a>
                <a href="#The Collection">The Collection</a>
                <div className="search"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M10.5 16C13.5376 16 16 13.5376 16 10.5C16 7.46243 13.5376 5 10.5 5C7.46243 5 5 7.46243 5 10.5C5 13.5376 7.46243 16 10.5 16Z" stroke="#1A1A1A" stroke-width="1.4" stroke-linejoin="bevel"/>
  <path d="M14.5 14.5L19 19" stroke="#1A1A1A" stroke-width="1.4" stroke-linecap="square" stroke-linejoin="bevel"/>
</svg>
</div>
              </div>
            </div>
          </div>
        </div>


    )


}


export default GeneralHeader;