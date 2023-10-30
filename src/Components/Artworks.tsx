import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Artworks.css';

interface artworkRail {
 api_model:string;
  id: number;
  image_id: string;
  title: string;
  artist_title: string;
}

const Artworks: React.FC = () => {
  const [artworks, setArtworks] = useState<artworkRail[]>([]);

  useEffect(() => {
    // Fetch artworks from API
    fetch('https://api.artic.edu/api/v1/artworks?limit=12')
      .then((response) => response.json())
      .then((data) => setArtworks(data.data))
      .catch((error) => console.error('Error fetching artworks:', error));
  }, []);

  return (
    <div className="artworks-container">
      <div className="artworks-header">
        <div className="artworks-heading">ARTWORKS</div>
        <Link to="/explore-collection" className="explore-link">
          Explore the collection ›
        </Link>
      </div>
      
      <div className="artwork-cards">
        {artworks.map((artworkRail) => (
          <Link to={`/${artworkRail.api_model}/${artworkRail.id}`} key={artworkRail.id} className="artwork-card">
            {artworkRail.image_id ? (
              <img
                src={`https://www.artic.edu/iiif/2/${artworkRail.image_id}/full/843,/0/default.jpg`}
                alt={artworkRail.title}
                loading='lazy'
              />
            ) : (
              <div className="fallback-image">
                <img
                src=
                { 'https://artic-web.imgix.net/7b38c611-392c-422d-8eea-53be80ac65cd/EighthBlackbirdSaverioTruglia.jpg?rect=0%2C525%2C3204%2C1800&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Ccenter&w=1200&h=674'}
                alt={artworkRail.title}
                loading='lazy'
              />
              </div>
            )}
            <div className="artwork-title">{artworkRail.title}</div>
            <div className="artist-title">{artworkRail.artist_title}</div>
          </Link>
     
        ))}
      </div>
    </div>
  );
};

export default Artworks;
