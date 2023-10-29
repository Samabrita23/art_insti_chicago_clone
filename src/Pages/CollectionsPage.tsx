import React, { useState } from 'react';
import GeneralHeader from '../Components/GeneralHeader';
import Footer from '../Components/Footer';
import "../Styles/CollectionsPage.css";
import "../Components/Blogs";
import Blogs from '../Components/Blogs';
import Events from '../Components/Events';
import CollectionsArtwork from "../Components/CollectionsArtwork";

const CollectionsPage = () => {
  const [activeTab, setActiveTab] = useState('ARTWORKS');

  const handleTabClick = (tab:string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <GeneralHeader />
      <div className="collections-container">
        <div className='collections-heading'>
          <div className='collections-head'>THE COLLECTION</div>
          <div className='collections-description'>Explore thousands of artworks in the museum’s collection—from our renowned icons to lesser-known works from every corner of the globe—as well as our books, writings, reference materials, and other resources.</div>
        </div>

        <div className="tabs-container">
          <div className={`tab ${activeTab === 'ARTWORKS' ? 'active' : ''}`} onClick={() => handleTabClick('ARTWORKS')}>ARTWORKS</div>
          <div className={`tab ${activeTab === 'WRITINGS' ? 'active' : ''}`} onClick={() => handleTabClick('WRITINGS')}>WRITINGS</div>
          <div className={`tab ${activeTab === 'RESOURCES' ? 'active' : ''}`} onClick={() => handleTabClick('RESOURCES')}>RESOURCES</div>
        </div>

        <div className="tab-content">
          {activeTab === 'ARTWORKS' && (
            // Render Artworks content
            <CollectionsArtwork></CollectionsArtwork>
          )}
          {activeTab === 'WRITINGS' && (
            // Render Writings content
            <Blogs></Blogs>
          )}
          {activeTab === 'RESOURCES' && (
            // Render Resources content
            <Events></Events>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CollectionsPage;
