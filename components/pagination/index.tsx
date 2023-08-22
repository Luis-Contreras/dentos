import React, { FC } from "react";
import { PaginationTypes } from "./pagination.types";
import { PaginationStyles } from "./pagination.styles";

const Pagination: FC<PaginationTypes> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <div style={{ width: "100%" }} className={PaginationStyles.base}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={isFirstPage}
        className={`${PaginationStyles.buttonBase} ${
          isFirstPage ? PaginationStyles.enable : PaginationStyles.desable
        }`}>
        Previous
      </button>
      <span className={PaginationStyles.pagination}>
        Pag {currentPage} for {totalPages}
      </span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={isLastPage}
        className={`${PaginationStyles.buttonBase} ${
          isLastPage ? PaginationStyles.enable : PaginationStyles.desable
        }`}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
