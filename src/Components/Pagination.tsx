// Pagination.tsx
import React from 'react';
import '../Styles/Pagination.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];

    let startPage = Math.max(1, currentPage - 5);
    let endPage = Math.min(totalPages, startPage + 9);

    if (currentPage <= 5) {
      startPage = 1;
      endPage = Math.min(totalPages, 10);
    } else if (currentPage >= totalPages - 4) {
      startPage = Math.max(1, totalPages - 9);
      endPage = totalPages;
    }

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

    if (currentPage > 5) {
      pageNumbers.unshift(<span key="ellipsis-start">...</span>);
    }

    if (currentPage < totalPages - 4) {
      pageNumbers.push(<span key="ellipsis-end">...</span>);
    }

    return pageNumbers;
  };

  return (
    <div className="pagination-container">
      <button
        className="pagination-button-prev"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </button>
      <div className="page-numbers">{renderPageNumbers()}</div>
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
