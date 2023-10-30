// Pagination.tsx
import React from 'react';
import '../Styles/Pagination.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  // Function to generate page numbers and ellipsis based on current page and total pages
  const renderPageNumbers = () => {
    const pageNumbers = [];

    let startPage = Math.max(1, currentPage - 5);
    let endPage = Math.min(totalPages, startPage + 9);

    // Adjust startPage and endPage for the first 10 pages
    if (currentPage <= 5) {
      startPage = 1;
      endPage = Math.min(totalPages, 10);
    } else if (currentPage >= totalPages - 4) {
      // Adjust startPage and endPage for the last 10 pages
      startPage = Math.max(1, totalPages - 9);
      endPage = totalPages;
    }

    // Generate page number buttons
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={currentPage === i ? 'active' : ''}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      );
    }

    // Add ellipsis before and after page numbers if needed
    if (currentPage > 5) {
      pageNumbers.unshift(<span key="ellipsis-start">...</span>);
    }

    if (currentPage < totalPages - 4) {
      pageNumbers.push(<span key="ellipsis-end">...</span>);
    }

    return pageNumbers;
  };

  // Render the Pagination component
  return (
    <div className="pagination-container">
      {/* Button for navigating to the previous page */}
      <button
        className="pagination-button-prev"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </button>
      {/* Container for displaying page numbers */}
      <div className="page-numbers">{renderPageNumbers()}</div>
      {/* Button for navigating to the next page */}
      <button
        className="pagination-button-next"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
