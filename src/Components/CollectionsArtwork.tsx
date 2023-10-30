// CollectionsArtwork.tsx

import React, { useState, useEffect } from 'react';
import CollectionCard from './CollectionCard';
import '../Styles/CollectionsArtwork.css';
import CityscapeIcons from "../Assets/CityscapeIcons.jpg.svg"
import ImpressionismIcon from "../Assets/ImpressionismIcon.jpg.svg";
import AnimalsIcon from "../Assets/AnimalsIcon.jpg.svg";
import EssentialsIcon from "../Assets/EssentialsIcon.jpg.svg";
import AfricanDiasporaIcon from "../Assets/AfricanDiasporaIcon.jpg.svg";
import FashionIcon from "../Assets/FashionIcon.jpg.svg";
import ChicagoArtistsIcon from "../Assets/ChicagoArtistsIcon.jpg.svg";
import PopArtIcon from "../Assets/PopArtIcon.jpg.svg";
import MythologyIcon from "../Assets/MythologyIcon.jpg.svg";
import Pagination from './Pagination';

interface Artwork {
  id: string;
  image_id: string;
  title: string;
  artist_title: string;
}

interface TabItem {
  title: string;
  icon: JSX.Element;
}

const getTabsList = (): TabItem[] => [
  { title: 'Cityscapes', icon: <img src={CityscapeIcons} alt="Cityscapes Icon" /> },
  { title: 'Impressionism', icon: <img src={ImpressionismIcon} alt="Impressionism Icon" /> },
  { title: 'Animals', icon: <img src={AnimalsIcon} alt="Animals Icon" /> },
  { title: 'Essentials', icon: <img src={EssentialsIcon} alt="Essentials Icon" /> },
  { title: 'African Diaspora', icon: <img src={AfricanDiasporaIcon} alt="African Diaspora Icon" /> },
  { title: 'Fashion', icon: <img src={FashionIcon} alt="Fashion Icon" /> },
  { title: 'Chicago Artists', icon: <img src={ChicagoArtistsIcon} alt="Chicago Artists Icon" /> },
  { title: 'Pop Art', icon: <img src={PopArtIcon} alt="Pop Art Icon" /> },
  { title: 'Mythology', icon: <img src={MythologyIcon} alt="Mythology Icon" /> },
];

const CollectionsArtwork: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('Cityscapes');
  const [onView, setOnView] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [artworks, setArtworks] = useState<Artwork[]>([]);

  const fetchArtworks = async () => {
    const apiUrl = `https://api.artic.edu/api/v1/artworks?page=${currentPage}&limit=50${searchQuery ? `&q=${searchQuery}` : ''}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        // Handle network error
        throw new Error(`Network error: ${response.statusText}`);
      }

      const data = await response.json();

      if (data && data.data && Array.isArray(data.data)) {
        // If there is a search query, sort the artworks based on the match
        const sortedArtworks = searchQuery
          ? data.data.sort((a: Artwork, b: Artwork) => (a.title.toLowerCase().includes(searchQuery.toLowerCase()) ? -1 : 1))
          : data.data;

        // Update the state based on the actual API response structure
        setArtworks(sortedArtworks);
        setTotalPages(data.pagination.total_pages);
      } else {
        console.error('Unexpected API response format:', data);
      }
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
          placeholder="Search by keyword, artist, or reference"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button className="search-icons">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path
              d="M10.5 16.02C13.5376 16.02 16 13.5576 16 10.52C16 7.48245 13.5376 5.02002 10.5 5.02002C7.46243 5.02002 5 7.48245 5 10.52C5 13.5576 7.46243 16.02 10.5 16.02Z"
              stroke="white"
              stroke-width="1.4"
              stroke-linejoin="bevel"
            />
            <path d="M14.5 14.52L19 19.02" stroke="white" stroke-width="1.4" stroke-linecap="square" stroke-linejoin="bevel" />
          </svg>
        </button>
      </div>

      {/* Tabs */}
      <div className="tab-container">
        <div className="tab-row">
          {getTabsList().map((tab) => (
            <div
              key={tab.title}
              className={`tab-item ${activeTab === tab.title ? 'active' : ''}`}
              onClick={() => handleTabClick(tab.title)}
            >
              {tab.icon}
              {tab.title}
            </div>
          ))}
        </div>
      </div>

      {/* Filter Options */}
      <div className="filter-options">
        <button className="show-filters">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path d="M16 8.58002H20V9.58002H16V8.58002ZM4 8.58002H13V9.58002H4V8.58002Z" fill="#7E746D" />
            <path d="M14.5 11.08C15.6046 11.08 16.5 10.1846 16.5 9.08002C16.5 7.97545 15.6046 7.08002 14.5 7.08002C13.3954 7.08002 12.5 7.97545 12.5 9.08002C12.5 10.1846 13.3954 11.08 14.5 11.08Z" stroke="#7E746D" stroke-miterlimit="10" />
            <path d="M8 16.58H4V15.58H8V16.58ZM20 16.58H11V15.58H20V16.58Z" fill="#7E746D" />
            <path d="M9.5 18.08C10.6046 18.08 11.5 17.1846 11.5 16.08C11.5 14.9754 10.6046 14.08 9.5 14.08C8.39543 14.08 7.5 14.9754 7.5 16.08C7.5 17.1846 8.39543 18.08 9.5 18.08Z" stroke="#7E746D" stroke-miterlimit="10" />
          </svg>

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
        {artworks &&
          artworks.map((artwork) => (
            artwork.id ? (
              <CollectionCard
                key={artwork.id || artwork.image_id}
                id={artwork.id || ''}
                imageId={artwork.image_id}
                title={artwork.title}
                artistTitle={artwork.artist_title}
              />
            ) : (
              // Handle the case where image_id is null
              <CollectionCard
                key={artwork.id || artwork.image_id}
                id={artwork.id || ''}
                imageId={null}
                title={artwork.title}
                artistTitle={artwork.artist_title}
              />
            )
          ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default CollectionsArtwork;
