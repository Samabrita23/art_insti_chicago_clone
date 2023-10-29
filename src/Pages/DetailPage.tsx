// DetailPage.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GeneralHeader from '../Components/GeneralHeader';
import Footer from '../Components/Footer';
import '../Styles/DetailPage.css';

interface DetailData {
  id: number;
  api_model: string;
  api_link: string;
  image_url: string;
  image_id: string;
  title: string;
  artist_title: string;
  date_start: number;
  aic_start_at: string;
  aic_end_at: string;
  artist_display: string;
  department_title: string;
  description: string | null;
  place_of_origin: string;
  medium_display: string;
  inscriptions: string | null;
  credit_line: string;
  dimensions: string;
  publication_history: string | null;
  exhibition_history: string | null;
  provenance_text: string;
  main_reference_number: string;
  iiif_url: string;
}

const DetailPage: React.FC = () => {
  const { id, api_model } = useParams<{ id: string; api_model: string }>();
  const [detailData, setDetailData] = useState<DetailData | null>(null);
  const [imageError, setImageError] = useState<boolean>(false);
  const [isPublicationExpanded, setPublicationExpanded] = useState<boolean>(false);
  const [isExhibitionExpanded, setExhibitionExpanded] = useState<boolean>(false);
  const [isProvenanceExpanded, setProvenanceExpanded] = useState<boolean>(false);

  useEffect(() => {
    // Fetch details from API
    fetch(`https://api.artic.edu/api/v1/${api_model}/${id}`)
      .then((response) => response.json())
      .then((data) => setDetailData(data.data))
      .catch((error) => {
        console.error('Error fetching detail data:', error);
        setDetailData(null);
      });
  }, [id, api_model]);

  const togglePublication = () => {
    setPublicationExpanded(!isPublicationExpanded);
  };

  const toggleExhibition = () => {
    setExhibitionExpanded(!isExhibitionExpanded);
  };

  const toggleProvenance = () => {
    setProvenanceExpanded(!isProvenanceExpanded);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div>
      <GeneralHeader />

      {detailData && (
        <div className="detail-container">
          <div className="detail-wrap">
            <div className="image-wrap">
              <div className="image-container">
                {imageError ? (
                  <img
                    src="https://placekitten.com/800/600"
                    alt="Placeholder"
                  />
                ) : (
                  <img
                    src={
                      detailData.image_url ||
                      `https://www.artic.edu/iiif/2/${detailData.image_id}/full/843,/0/default.jpg` ||
                      'https://artic-web.imgix.net/7b38c611-392c-422d-8eea-53be80ac65cd/EighthBlackbirdSaverioTruglia.jpg?rect=0%2C525%2C3204%2C1800&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Ccenter&w=1200&h=674'
                    }
                    alt={detailData.title}
                    onError={handleImageError}
                  />
                )}
              </div>
            </div>
            <div className="columns-detail">
              {/* left column */}
              <div className="column1">
                <div className='on-view'>On View</div>
                <p><u>{detailData.department_title || detailData.api_model}</u></p>
              </div>
              {/* middle column */}
              <div className="column2">
                <div className='det-title'>{detailData.title
                  .replace(/-/g, ' ')
                  .replace(/\b\w/g, (match) => match.toUpperCase())}
                </div>
                <div className='det-start'>{detailData.date_start}</div>
                <div className='det-artist'>
                  {detailData.artist_display && detailData.artist_display.split('\n').map((line, index) =>
                    (<div key={index}>{line}</div>)) || 'Art Institute of Chicago'}
                </div>
                <div className='det-description' dangerouslySetInnerHTML={{ __html: detailData.description || '<span class="default-description">Home to a collection of art that spans centuries and the globe, the Art Institute of Chicago is located in the heart of the city—and is one of Tripadvisor’s “Best of the Best” US attractions of 2023.</span>' }}></div>
                <div className="details-table-container">
                  <table className='details-table'>
                    <tbody>
                      <tr>
                        <td>Artist</td>
                        <td>{detailData.artist_title || 'Artist Name'}</td>
                      </tr>
                      <tr>
                        <td>Title</td>
                        <td>{detailData.title || 'Title of Artwork'}</td>
                      </tr>
                      <tr>
                        <td>Date</td>
                        <td>{detailData.date_start || '2023'}</td>
                      </tr>
                      <tr>
                        <td>Medium</td>
                        <td>{detailData.medium_display || 'Artwork'}</td>
                      </tr>
                      <tr>
                        <td>Inscriptions</td>
                        <td>{detailData.inscriptions || 'Not available'}</td>
                      </tr>
                      <tr>
                        <td>Dimensions</td>
                        <td>{detailData.dimensions || 'Not available'}</td>
                      </tr>
                      <tr>
                        <td>Credit Line</td>
                        <td>{detailData.credit_line || 'Not available'}</td>
                      </tr>
                      <tr>
                        <td>Reference Number</td>
                        <td>{detailData.main_reference_number || 'Not available'}</td>
                      </tr>
                      <tr>
                        <td>IIIF Manifest</td>
                        <td>{detailData.api_link || 'https://www.artic.edu/iiif/2/{identifier}/full/843,/0/default.jpg'}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className='det-publication' onClick={togglePublication}>
                  <span className={`publication-header ${isPublicationExpanded ? 'expanded' : ''}`}>
                    PUBLICATION HISTORY
                  </span>
                  <span>{isPublicationExpanded ? ' -' : ' +'}</span>
                </div>

                {isPublicationExpanded && (
                  <div className='det-content'>
                    {detailData.publication_history || 'Publication data is not available'}
                  </div>
                )}
                
                <div className='det-exhibition' onClick={toggleExhibition}>
                  <span className={`exhibition-header ${isExhibitionExpanded ? 'expanded' : ''}`}>
                    EXHIBITION HISTORY
                  </span>
                  <span>{isExhibitionExpanded ? ' -' : ' +'}</span>
                </div>
                
                {isExhibitionExpanded && (
                  <div className='det-content'>
                    {detailData.exhibition_history || 'Exhibition History is not available'}
                  </div>
                )}

                <div className='det-provenance' onClick={toggleProvenance}>
                  <span className={`provenance-header ${isProvenanceExpanded ? 'expanded' : ''}`}>
                    PROVENANCE
                  </span>
                  <span>{isProvenanceExpanded ? ' -' : ' +'}</span>
                </div>

                {isProvenanceExpanded && (
                  <div className='det-content'>
                    {detailData.provenance_text || 'Provenance data is not available'}
                  </div>
                )}

      
              </div>

              <div className="column3"></div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default DetailPage;
