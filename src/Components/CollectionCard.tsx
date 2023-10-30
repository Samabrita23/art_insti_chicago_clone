// CollectionCard.tsx

import React from 'react';
import '../Styles/Artworks.css';

interface CollectionCardProps {
  imageId: string;
  title: string;
  artistTitle: string;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ imageId, title, artistTitle }) => {
  return (
    <div className='artwork-card'>
      {/* Image */}
      <img
        src={`https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`} // Replace with your actual image URL or use your image processing logic
        alt={title}
        className="card-image"
        loading='lazy'
      />

      {/* Title */}
      <div className="artwork-title">{title}</div>

      {/* Artist */}
      <div className="artist-title">{artistTitle}</div>
    </div>
  );
};

export default CollectionCard;
