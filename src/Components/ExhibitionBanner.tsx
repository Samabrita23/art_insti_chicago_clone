import React, { useEffect, useState } from "react";
import "../Styles/ExhibitionBanner.css";
import { formatDateRange } from "./Common";

// Interface defining the structure of exhibition data
interface ExhibitionData {
  id: number;
  api_model: string;
  title: string;
  aic_start_at: string;
  aic_end_at: string;
}

// Functional component for displaying an exhibition card
const ExhibitionCard = () => {
  // State to store exhibition data retrieved from the API
  const [exhibitionData, setExhibitionData] = useState<ExhibitionData | null>(null);

  // Effect hook to fetch exhibition data when the component mounts
  useEffect(() => {
    // Function to fetch exhibition data from the API
    const fetchExhibitionData = async () => {
      try {
        // Fetch data from the specified API endpoint
        const response = await fetch("https://api.artic.edu/api/v1/exhibitions/9935");
        
        // Parse the JSON response
        const data = await response.json();

        // Set the retrieved exhibition data in the component state
        setExhibitionData(data.data);
      } catch (error) {
        // Log an error message if there is an issue fetching the data
        console.error("Error fetching exhibition data:", error);
      }
    };

    // Call the fetchExhibitionData function to initiate the data fetching
    fetchExhibitionData();
  }, []);

  // Render the exhibition card component
  return (
    <div className="exhibition-card">
      {/* Display the exhibition data if available */}
      {exhibitionData && (
        <div>
          <p className="model-type">{exhibitionData.api_model}</p>
          <p className="title">{exhibitionData.title}</p>
      
          {/* Display the formatted duration of the exhibition */}
          <p className="duration">{formatDateRange(exhibitionData.aic_start_at, exhibitionData.aic_end_at)}</p>
        </div>
      )}
    </div>
  );
};

export default ExhibitionCard;
