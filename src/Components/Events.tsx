// Events.tsx
import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Link } from 'react-router-dom';
import { formatDateRange } from './Common';
import "../Styles/Events.css";

// Interface defining the structure of event data
interface EventData {
  id: number;
  api_model: string;
  image_url: string;
  title: string;
  start_time: string;
  end_time: string;
}

const Events: React.FC = () => {
  const [events, setEvents] = useState<EventData[]>([]);

  useEffect(() => {
    axios.get('https://api.artic.edu/api/v1/events')
      .then((response: AxiosResponse<{ data: EventData[] }>) => setEvents(response.data.data.slice(0, 4)))
      .catch((error) => console.error('Error fetching events:', error));
  }, []);
  
  return (
    <div className="events-container">
      <div className="events-header">
        <div>EVENTS</div>
        <button className="see-more-link">See upcoming events ›</button>
      </div>

      <div className="event-cards">
        {events.map((event) => (
          <Link key={event.id} to={`/${event.api_model}/${event.id}`} className="event-card-link">
            <div className="event-card">
              <img src={event.image_url} alt={event.title} loading="lazy" />
              <div className="event-title">{event.title}</div>
              <div className="event-time">Thursdays - Mondays | {event.start_time}- {event.end_time}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Events;
