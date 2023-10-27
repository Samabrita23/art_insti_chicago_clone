import React from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import "../Styles/Footer.css";
import FooterIcon from "../Assets/footerIcon.svg";
import FooterMap from "../Assets/footerMap_120x92.svg";

const Footer: React.FunctionComponent = () => {
  const sections = [
    {
      title: "Michigan Avenue Entrance",
      items: ["111 South Michigan Avenue", "Chicago, IL 60603"],
    },
    {
      title: "Modern Wing Entrance",
      items: ["159 East Monroe Street", "Chicago, IL 60603"],
    },
    {
      title: "About Us",
      items: ["Mission and History", "Leadership", "Departments", "Financial Reporting"],
    },
    {
      title: "Support Us",
      items: ["Membership", "Luminary", "Planned Giving", "Corporate Sponsorship"],
    },
    {
      title: "Learn With Us",
      items: ["Families", "Teens", "Educators", "College and University"],
    },
    {
      title: "Follow Us",
      items: ["Facebook", "Twitter", "Instagram", "YouTube"],
    },
    {
        items: ["Press",
       " Careers",
       " Contact",
       " Venue Rental",
       " Image Licensing",
       " SAIC",
       " Terms"]
    }
  ];

  return (
    <div className="footer-container">
      {/* Back to Top button */}
      <div className="back-to-top" onClick={() => window.scrollTo(0, 0)}>
        <span className="top">BACK TO TOP</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
<path d="M3.893 10.7207C5.773 9.3527 7.137 8.3327 8.5 7.4557C9.863 8.3327 11.227 9.3527 13.107 10.7207L13.5 9.8637C11.743 8.2717 10.236 6.9047 8.707 5.7207H8.293C6.764 6.9047 5.257 8.2717 3.5 9.8637L3.893 10.7207Z" fill="white"/>
</svg>
      </div>
      
      {/* Row of 4 columns */}
      <div className="columns">
        {/* Column 1 */}
        <div className="column-1">
          <img 
          src={FooterIcon} 
          alt="Footer" 
          loading="lazy" 
          />
          <div>Visit</div>
          <div>Exhibitions & Events</div>
          <div>The Collection</div>
        </div>
        
        {/* Column 2 */}
        <div className="column-2">
          <img 
          src={FooterMap} 
          alt="Footer Map" 
          loading="lazy"/>
          <div className="column-sections">
            <div className="footer-title">{sections[0].title}</div>
            <div>{sections[0].items.map((item) => (
              <div key={item}>{item}</div>
            ))}</div>
            <br />
            <div className="footer-title">{sections[1].title}</div>
            <div>{sections[1].items.map((item) => (
              <div key={item}>{item}</div>
            ))}</div>
          </div>
        </div>
        
        {/* Column 3 */}
        <div className="column-3-4">
          <div className="column-sections">
            <div className="foot-title">{sections[2].title}</div>
            {sections[2].items.map((item) => (
              <div key={item}>{item}</div>
            ))}
            <div className="column-break"></div>
            <div className="foot-title">{sections[3].title}</div>
            {sections[3].items.map((item) => (
              <div key={item}>{item}</div>
            ))} 
          </div>
        </div>

        {/* Column 4 */}
        <div className="column-3-4">
          <div className="column-sections">
            <div className="foot-title">{sections[4].title}</div>
            {sections[4].items.map((item) => (
              <div key={item}>{item}</div>
            ))}
            <div className="column-break"> </div>
            <div className="foot-title">{sections[5].title}</div>
            {sections[5].items.map((item) => (
              <div key={item}>{item}</div>
            ))} 
          </div>
        </div>

      </div>

      {/* Bottom row of items */}
      <div className="bottom-row">
        {sections[6].items.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
