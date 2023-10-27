// DetailPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h2>Detail Page</h2>
      <p>Exhibition ID: {id}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default DetailPage;
