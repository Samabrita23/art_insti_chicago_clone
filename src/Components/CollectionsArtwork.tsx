// CollectionsArtwork.tsx

import React, { useState, useEffect } from 'react';
import CollectionCard from './CollectionCard';
import '../Styles/CollectionsArtwork.css';

interface Artwork {
  image_id: string;
  title: string;
  artist_title: string;
}

interface ArtworksResponse {
  data: {
    total_pages: number;
    results: Artwork[];
  };
}

const CollectionsArtwork: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('Cityscapes');
  const [onView, setOnView] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [artworks, setArtworks] = useState<Artwork[]>([]);

  // Fetch artworks from the API based on the active tab and search query
  const fetchArtworks = async () => {
    // Use your API endpoint here
    const apiUrl = `https://api.artic.edu/api/v1/artworks?tab=${activeTab}&q=${searchQuery}&page=${currentPage}&limit=50`;

    try {
      const response = await fetch(apiUrl);
      const data: ArtworksResponse = await response.json();
      setArtworks(data.data.results);
      setTotalPages(data.data.total_pages);
    } catch (error) {
      console.error('Error fetching artworks:', error);
    }
  };

  // Handle tab click
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  // Handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Handle checkbox change
  const handleCheckboxChange = () => {
    setOnView(!onView);
  };

  // Handle pagination
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    fetchArtworks();
  }, [activeTab, searchQuery, currentPage]);

  return (
    <div className="collections-artwork">
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by keyword, artist or reference"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button className="search-icons">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <path d="M10.5 16.02C13.5376 16.02 16 13.5576 16 10.52C16 7.48245 13.5376 5.02002 10.5 5.02002C7.46243 5.02002 5 7.48245 5 10.52C5 13.5576 7.46243 16.02 10.5 16.02Z" stroke="white" stroke-width="1.4" stroke-linejoin="bevel"/>
  <path d="M14.5 14.52L19 19.02" stroke="white" stroke-width="1.4" stroke-linecap="square" stroke-linejoin="bevel"/>
</svg>
        
        </button>
      </div>
      
      {/* Tabs */}
      <div className="tab-row">
        {/* Add your tab components here */}
        {/* Example: */}
        <div
          className={`tab-item ${activeTab === 'Cityscapes' ? 'active' : ''}`}
          onClick={() => handleTabClick('Cityscapes')}
        >
          Cityscapes
        </div>
        {/* Repeat for other tabs */}
      </div>

      {/* Filter Options */}
      <div className="filter-options">
        <button className="show-filters">
          {/* Add your show filters icon or text here */}
          Show Filters
        </button>
        <div className="checkbox-and-buttons">
          <input
            type="checkbox"
            id="onViewCheckbox"
            checked={onView}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="onViewCheckbox">On View</label>
          <button className="all-results">All Results</button>
        </div>
      </div>

      {/* Artwork Cards */}
      <div className="artwork-cards">
        {/* Map through artworks and render CollectionCard component */}
        {artworks && artworks.map((artwork) => (
          <CollectionCard
            key={artwork.image_id}
            imageId={artwork.image_id}
            title={artwork.title}
            artistTitle={artwork.artist_title}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {/* Add your pagination component here */}
        {/* Example: */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={currentPage === index + 1 ? 'active' : ''}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CollectionsArtwork;
