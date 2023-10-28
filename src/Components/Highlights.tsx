// Highlights.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Highlights.css';

interface Highlight {
    id: number;
    api_model: string;
    image_url: string;
    title: string;
  }
  
  const Highlights: React.FC = () => {
    const [highlights, setHighlights] = useState<Highlight[]>([]);
  
    useEffect(() => {
      // Fetch highlights from API
      fetch('https://api.artic.edu/api/v1/highlights')
        .then((response) => response.json())
        .then((data) => setHighlights(data.data.slice(0, 3))) // Limit to 3 highlights
        .catch((error) => console.error('Error fetching highlights:', error));
    }, []);
    const imageUrl = 'https://artic-web.imgix.net/7b38c611-392c-422d-8eea-53be80ac65cd/EighthBlackbirdSaverioTruglia.jpg?rect=0%2C525%2C3204%2C1800&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Ccenter&w=1200&h=674';
  
    return (
    <div className="highlights-container">
      <div className="highlights-header">
        <div className="highlights-heading">HIGHLIGHTS</div>
        <button className="see-more-link">See all highlights ›</button>
        {/* <Link to="/all-highlights">See all highlights ›</Link> */}
      </div>
      
      <div className="highlight-cards">
        {highlights.map((highlight) => (
          <Link to={`/${highlight.api_model}/${highlight.id}`} key={highlight.id} className="highlight-card">
            <img src={imageUrl} alt={highlight.title} loading='lazy' />
            <div className='highlights-model' >{highlight.api_model}</div>
            <div className='highlights-title'>
            {highlight.title
                .replace(/-/g, ' ') // Replace hyphens with spaces
                .replace(/\b\w/g, (match) => match.toUpperCase())} {/* Capitalize first letter */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
