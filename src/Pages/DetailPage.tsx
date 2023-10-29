// DetailPage.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GeneralHeader from '../Components/GeneralHeader';
import Footer from '../Components/Footer';
import '../Styles/DetailPage.css';

interface DetailData {
  id: number;
  api_model: string;
  image_url: string;
  image_id: string;
  title: string;
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
                src="https://placekitten.com/800/600" // Placeholder image URL
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
          <div className="details">
            <h2>{detailData.title}</h2>
            <p>Exhibition ID: {detailData.id}</p>
            {/* Add more details as needed */}
          </div>
        </div>
        </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default DetailPage;
