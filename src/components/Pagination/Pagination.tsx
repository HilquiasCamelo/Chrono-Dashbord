import { useState, useEffect } from "react";
import { PaginationContainer } from "./PaginationStyle";

interface Props {
  totalElements: number;
  currentPage: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  numberOfElements: number;
}

const Pagination: React.FC<Props> = ({ totalElements, currentPage, itemsPerPage, onPageChange, numberOfElements }) => {
  const totalPages = Math.ceil(totalElements / itemsPerPage);
  const pages = Array.from(Array(totalPages), (_, index) => index + 1);
  const startPage = Math.max(1, currentPage - 1);
  const endPage = Math.min(startPage + 2, totalPages + 1);
  const isLastPage = currentPage === totalPages && numberOfElements <= itemsPerPage;

  
  const [currentPageRange, setCurrentPageRange] = useState({ start: 0, end: 0 });

  useEffect(() => {
    const currentPageStart = (currentPage - 1) * itemsPerPage + 1;
    let currentPageEnd = currentPageStart + itemsPerPage - 1;
    if (currentPage === totalPages && totalElements % itemsPerPage !== 0) {
      currentPageEnd = totalElements % itemsPerPage + (currentPage - 1) * itemsPerPage;
    } else {
      currentPageEnd = Math.min(currentPageEnd, totalElements);
    }
    setCurrentPageRange({ start: currentPageStart, end: currentPageEnd });
  }, [currentPage, itemsPerPage, totalElements, totalPages]);

  if (totalPages === 0) {
    return null;
  }

  return (
    <PaginationContainer>
      <button onClick={() => onPageChange(1)} disabled={currentPage === 1}>Primeira página</button>
      {totalPages > 3 && <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>Anterior</button>}
      {pages.slice(startPage - 1, endPage).map((page) => (
        <button
          key={page}
          className={currentPage === page ? "current-page" : ""}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      {!isLastPage && totalPages > 3 && <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>Próxima</button>}
      <button onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages}>Última página</button>
      <span>{`Mostrando ${currentPageRange.start} - ${currentPageRange.end} de ${totalElements}`}</span>
    </PaginationContainer>
  );
};

export default Pagination;
