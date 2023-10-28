// Videos.tsx
import React, { useState, useRef } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import '../Styles/Videos.css';

// Hardcoded data
const videoData = {
  title: 'Exhibition Stories',
};

interface VideoCardProps {
  title: string;
  onClick: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, onClick }) => {
  // YouTube video ID
  const youtubeVideoId = 'coKWZWko7ZM';

  // YouTube thumbnail URL
  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`;

  return (
    <div className="video-card" onClick={onClick}>
      <div className="card-inner">
        {/* Display YouTube thumbnail and play button */}
        <img src={thumbnailUrl} alt={title} />
        <button className="play-button">
          <span className="play-icon"></span>
        </button>
      </div>

      {/* Display video title */}
      <p className="video-title"><i>Remedios Varo: Science Fictions</i> | {title} </p>
    </div>
  );
};

const Videos: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<boolean>(false); // State for selected video
  const [scrollPosition, setScrollPosition] = useState<number>(0); // State for scroll position

  // Modal iframe URL
  const videoIframeUrl = 'https://www.youtube.com/embed/coKWZWko7ZM';

  const videoCardsRef = useRef<HTMLDivElement>(null);

  // Handle click on a video
  const handleVideoClick = () => {
    setSelectedVideo(true);
  };

  // Handle modal window open/close
  const handleModalOpen = () => {
    setSelectedVideo(false);
  };
// Handle scroll to the left
const handleScrollLeft = () => {
    if (videoCardsRef.current) {
      videoCardsRef.current.scrollLeft -= videoCardsRef.current.clientWidth;
    }
  };
  
  // Handle scroll to the right
  const handleScrollRight = () => {
    if (videoCardsRef.current) {
      videoCardsRef.current.scrollLeft += videoCardsRef.current.clientWidth;
    }
  };
  
  

  // Render the list of videos using the VideoCard component
  const renderVideos = () => {
    // Define the number of videos to display
    const numVideos = 16;
    // Create an array of indices to generate unique keys for each VideoCard
    const videoIndices = Array.from({ length: numVideos }, (_, index) => index);

    return (
      <div className="video-cards" ref={videoCardsRef} style={{ transform: `translateX(-${scrollPosition}px)` }}>
        {videoIndices.map((index) => (
          <VideoCard key={index} title={videoData.title} onClick={handleVideoClick} />
        ))}
      </div>
    );
  };

  // Render the component
  return (
    <div className="videos-container">
      <div className="videos-header">
        <div className="header-title">Videos</div>
        <div className="scroll-arrows">
          <MdKeyboardArrowLeft className="arrow-icon" onClick={handleScrollLeft} />
          <MdKeyboardArrowRight className="arrow-icon" onClick={handleScrollRight} />
        </div>
      </div>

      {renderVideos()}
      {selectedVideo && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={handleModalOpen}>
              <span className="close-icon"></span>
            </button>
            <iframe
              title="embedded-video"
              className="modal-iframe"
              width="100%"
              height="315"
              src={videoIframeUrl}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Videos;
