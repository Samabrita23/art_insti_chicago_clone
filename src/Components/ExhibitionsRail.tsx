// ExhibitionsRail.tsx
import React, { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';  // Import AxiosResponse type from axios
import axios from 'axios';

import "../Styles/ExhibitionsRail.css";
import { formatDateRange } from "./Common";
import { Link } from 'react-router-dom';

// Define the structure of exhibition data
interface Exhibition {
  id: number;
  api_model: string;
  title: string;
  image_url: string;
  aic_start_at: string;
  aic_end_at: string;
}

// ExhibitionsRail functional component
const ExhibitionsRail: React.FC = () => {
  const [exhibitions, setExhibitions] = useState<Exhibition[]>([]);

  // Fetch exhibitions data from the API on component mount
  useEffect(() => {
    axios.get('https://api.artic.edu/api/v1/exhibitions')
      .then((response: AxiosResponse<{ data: Exhibition[] }>) => setExhibitions(response.data.data))
      .catch((error) => console.error('Error fetching exhibitions:', error));
  }, []);

  // Render the ExhibitionsRail component
  return (
    <div className="exhibitions-rail">
      <div className="exhi-header">
        <div>EXHIBITIONS</div>
        <button className="all-exhibitions-button">All current exhibitions ›</button>
      </div>

      {/* Display exhibition cards */}
      <div className="exhi-cards">
        {exhibitions.slice(1, 3).map((exhibition) => (
          <Link key={exhibition.id} to={`/${exhibition.api_model}/${exhibition.id}`} style={{ textDecoration: 'none' }}>
            <ExhibitionCard key={exhibition.id} exhibition={exhibition} />
          </Link>
        ))}
      </div>
    </div>
  );
};

// ExhibitionCard functional component
const ExhibitionCard: React.FC<{ exhibition: Exhibition }> = ({ exhibition }) => (
  <div className="exhi-wrap">
    <div className="exhi-card">
      {/* Display exhibition card details */}
      <img src={exhibition.image_url} alt={exhibition.title} loading='lazy' />
      <div className="exhi-model">{exhibition.api_model}</div>
      <div className="exhi-title">{exhibition.title}</div>
      <div className="exhi-duration">{formatDateRange(exhibition.aic_start_at, exhibition.aic_end_at)}</div>
    </div>
  </div>
);

export default ExhibitionsRail;
