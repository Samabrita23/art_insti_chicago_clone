import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Artworks.css';

interface Artwork {
 api_model:string;
  id: number;
  image_id: string;
  title: string;
  artist_title: string;
}

const Artworks: React.FC = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);

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
        {artworks.map((artwork) => (
          <Link to={`/${artwork.api_model}/${artwork.id}`} key={artwork.id} className="artwork-card">
            <img
              src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
              alt={artwork.title}
              loading='lazy'
            />
            <div className="artwork-title">{artwork.title}</div>
            <div className="artist-title">{artwork.artist_title}</div>
          </Link>
     
        ))}
      </div>
    </div>
  );
};

export default Artworks;
