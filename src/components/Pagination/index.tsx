'use client';
import { IGameInfo, IGameInput } from '@/@types/Games';
import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

interface IPaginationProps {
  games: IGameInfo[] | undefined;
  fetchGame: (input?: IGameInput) => void;
  loading: boolean;
  children: ReactNode;
}

export function Pagination({
  games,
  fetchGame,
  loading,
  children,
}: IPaginationProps) {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(8);
  const count = games?.[0].count || 0;
  const handlePageClick = useCallback(
    (data: { selected: number }) => {
      setCurrentPage(data.selected);
      fetchGame({ page: data.selected + 1, page_size: itemsPerPage });
    },
    [fetchGame, itemsPerPage],
  );

  useEffect(() => {
    if (!games && !loading) {
      fetchGame({ page: 1, page_size: itemsPerPage });
    }
  }, [games, fetchGame, itemsPerPage, loading]);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedNames = games?.slice(startIndex, endIndex);
  const pageCount = displayedNames ? Math.ceil(count / itemsPerPage) : 0;

  const selectValues = [8, 16, 32, 64];
  return (
    <div>
      <select>
        {selectValues.map((item) => {
          return (
            <option key={`select-item-per-page${item}`} value={item}></option>
          );
        })}
      </select>
      <div className='flex flex-wrap gap-[15px] justify-center'>{children}</div>
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
