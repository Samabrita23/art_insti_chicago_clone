// CollectionCard.tsx

import React from 'react';
import '../Styles/CollectionCard.css';

interface CollectionCardProps {
  imageId: string;
  title: string;
  artistTitle: string;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ imageId, title, artistTitle }) => {
  return (
    <div className="collection-card">
      {/* Image */}
      <img
        src={`https://www.example.com/images/${imageId}.jpg`} // Replace with your actual image URL or use your image processing logic
        alt={title}
        className="card-image"
      />

      {/* Title */}
      <div className="card-title">{title}</div>

      {/* Artist */}
      <div className="card-artist">{artistTitle}</div>
    </div>
  );
};

export default CollectionCard;
