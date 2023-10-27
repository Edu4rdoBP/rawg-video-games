'use client';
import { IGameInput } from '@/@types/Games';
import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

interface IPaginationProps {
  data: unknown[] | undefined,
  fetchData: (input?: IGameInput) => void,
  loading: boolean,
  children: ReactNode,
}

export function Pagination({ data, fetchData, loading, children }: IPaginationProps) {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(8);

  const handlePageClick = useCallback(
    (data: { selected: number }) => {
      setCurrentPage(data.selected);
      fetchData({ page: data.selected + 1, page_size: 3 });
    },
    [setCurrentPage, fetchData],
  );

  useEffect(() => {
    if (!data && !loading) {
      fetchData({ page: 1, page_size: itemsPerPage });
    }
  }, [data, fetchData, loading]);


  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedNames = data?.slice(startIndex, endIndex);
  const pageCount = displayedNames
    ? Math.ceil(displayedNames?.length / itemsPerPage)
    : 0;

  const selectValues = [8, 16, 32, 64];
  return (
    <div>
      <select>{selectValues.map((item) => {
        return (
          <option value={item}></option>
        )
      })}</select>
      {children}
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
