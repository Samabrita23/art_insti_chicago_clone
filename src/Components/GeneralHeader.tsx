import React, { useEffect, useState } from "react";
import WhiteLogo from "../Assets/WhiteLogo.svg";
import "../Styles/HomepageHeader.css";
import "../Styles/GeneralHeader.css";

const GeneralHeader = () => {
  const [scrollingUp, setScrollingUp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition =
        window.scrollY || document.documentElement.scrollTop;
      setScrollingUp(
        currentPosition < (window.scrollY || document.documentElement.scrollTop)
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <div className={`top-head ${scrollingUp ? 'scrolled-up' : ''}`}>
      <div className="header-wrap">
        <img
          src={WhiteLogo}
          alt="Art Institute of Chicago"
          loading="lazy"
          className="logo"
        />
        <div className="header-nav">
          <div className="secondary-nav">
            <a href="#Buy Tickets">Buy Tickets</a>
            <a href="#Become a member">Become a member</a>
            <a href="#Shop">Shop</a>
          </div>
          <div className="primary-nav">
            <a href="#Visit">Visit</a>
            <a href="#Exhibitions & Events">Exhibitions & Events</a>
            <a href="/collection">The Collection</a>
            <div className="search">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M10.5 16C13.5376 16 16 13.5376 16 10.5C16 7.46243 13.5376 5 10.5 5C7.46243 5 5 7.46243 5 10.5C5 13.5376 7.46243 16 10.5 16Z" stroke="#1A1A1A" stroke-width="1.4" stroke-linejoin="bevel" />
                <path d="M14.5 14.5L19 19" stroke="#1A1A1A" stroke-width="1.4" stroke-linecap="square" stroke-linejoin="bevel" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralHeader;
