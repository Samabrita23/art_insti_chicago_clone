import React from 'react';
import '../Styles/Artworks.css';

interface CollectionCardProps {
  id: string;
  imageId: string;
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
        src={`https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg` ||  'https://artic-web.imgix.net/7b38c611-392c-422d-8eea-53be80ac65cd/EighthBlackbirdSaverioTruglia.jpg?rect=0%2C525%2C3204%2C1800&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Ccenter&w=1200&h=674'} 
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
