import React from "react";
import RedLogo from "../Assets/RedLogo.svg";
import HomePageBackground from "../Assets/HomePageBackground.svg";
import "../Styles/HomepageHeader.css";


const HomepageHeader = () => {
    return (
        <div className="header-container">
        <div className="home-image">
             <img
              src={HomePageBackground} 
              alt ="A person sits at a table in a study-like room stringing objects—flowers, leaves, vegetables, crystals, scraps of paper with mathematical equations—onto a three-dimensional musical staff.Figures emerging from the wall do the same, while the floor's tiles come loose, drawers overflow, and birds nest in the back of a chair."
              style={{ width: "100%", height: "90vh", objectFit: "cover" }}
              />
        
           <div className="top-header">
            <div className="header-wrapper">
              <img 
               src={RedLogo} 
               alt="Art Institute of Chicago" 
               className="logo" />

              <div className="secondary-navbar">
                <a href="#Buy Tickets">Buy Tickets</a>
                <a href="#Become a member">Become a member</a>
                <a href="#Shop">Shop</a>        
             </div>


            </div>
           </div>
      </div>
      </div>

    )
    
};

export default HomepageHeader;
