import React from 'react';
import '../Styles/Artworks.css';

interface CollectionCardProps {
  id: string;
  imageId: string | null; // Make imageId nullable
  title: string;
  artistTitle: string;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ id, imageId, title, artistTitle }) => {
  // Check if imageId is null before rendering
  if (!imageId) {
    return (
      <div className='artwork-card' key={id}>
        <div className="artwork-title">{title}</div>
        <div className="artist-title">{artistTitle}</div>
      </div>
    );
  }

  // Render the card with the image
  return (
    <div className='artwork-card' key={id}>
      {/* Image */}
      <img
        src={`https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`} 
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
