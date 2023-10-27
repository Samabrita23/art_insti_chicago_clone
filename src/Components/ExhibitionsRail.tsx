// ExhibitionsRail.tsx
import React, { useEffect, useState } from 'react';
import {AxiosResponse} from 'axios';
import axios from 'axios';

import "../Styles/ExhibitionsRail.css";
import { formatDateRange } from "./Common";
import { Link } from 'react-router-dom';

interface Exhibition {
  id: number;
  api_model: string;
  title: string;
  image_url: string;
  aic_start_at: string;
  aic_end_at: string;
}

const ExhibitionsRail: React.FC = () => {
  const [exhibitions, setExhibitions] = useState<Exhibition[]>([]);

  useEffect(() => {
    axios.get('https://api.artic.edu/api/v1/exhibitions')
      .then((response: AxiosResponse<{ data: Exhibition[] }>) => setExhibitions(response.data.data))
      .catch((error) => console.error('Error fetching exhibitions:', error));
  }, []);
  
//   useEffect(() => {
//     axios.get('https://api.artic.edu/api/v1/exhibitions')
//       .then((response) => setExhibitions(response.data.data))
//       .catch((error) => console.error('Error fetching exhibitions:', error));
//   }, []);

  return (
    <div className="exhibitions-rail">
      <div className="exhi-header">
        <div>EXHIBITIONS</div>
        <button className="all-exhibitions-button">All current exhibitions ›</button>
      </div>

      <div className="exhi-cards">
        {exhibitions.slice(1, 3).map((exhibition) => (
            <Link key={exhibition.id} to={`/detail/${exhibition.id}`} style={{ textDecoration: 'none' }}>
          <ExhibitionCard key={exhibition.id} exhibition={exhibition} />
          </Link>
        ))}
      </div>
    </div>
  );
};

const ExhibitionCard: React.FC<{ exhibition: Exhibition }> = ({ exhibition }) => (
  <div className="exhi-card">
    <img src={exhibition.image_url} alt={exhibition.title} loading='lazy' />
    <div className="exhi-model">{exhibition.api_model}</div>
    <div className="exhi-title">{exhibition.title}</div>
    <div className="exhi-duration">{formatDateRange(exhibition.aic_start_at, exhibition.aic_end_at)}</div>
  </div>
);

export default ExhibitionsRail;
