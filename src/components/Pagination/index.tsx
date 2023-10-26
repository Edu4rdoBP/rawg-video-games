'use client';
import { useGameList } from '@/hooks/useGameList';
import React, { useCallback, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

export function Pagination() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const { fetchGames, gameList, loading } = useGameList();

  const handlePageClick = useCallback(
    (data: { selected: number }) => {
      setCurrentPage(data.selected);
      fetchGames({ page: data.selected + 1, page_size: 3 });
    },
    [setCurrentPage, fetchGames],
  );

  useEffect(() => {
    if (!gameList && !loading) {
      fetchGames({ page: 1, page_size: 3 });
    }
  }, [gameList, fetchGames, loading]);

  const itemsPerPage = 3;

  // Calcula o índice inicial e final da lista a ser exibida na página atual
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedNames = gameList?.slice(startIndex, endIndex);
  const pageCount = displayedNames
    ? Math.ceil(displayedNames?.length / itemsPerPage)
    : 0;

  return (
    <div>
      {/* Exibe os nomes da página atual */}
      <ul>
        {displayedNames?.map((game, index) => <li key={index}>{game.name}</li>)}
      </ul>

      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={5}
        marginPagesDisplayed={1}
        previousLabel={'Anterior'}
        nextLabel={'Próximo'}
        breakLabel={'...'}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
        initialPage={currentPage}
      />
    </div>
  );
}
