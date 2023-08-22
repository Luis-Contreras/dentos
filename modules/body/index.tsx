import React, { useState, useEffect } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import { Card } from "../../components";
import { GET_DATA } from "../../pages/api";
import Loading from "../../components/loading";
import Error from "../../components/error";
import Pagination from "../../components/pagination";

const INITIAL_SEARCH = [1, 2, 3, 4, 5, 6];
const ITEMS_PER_PAGE = 6;
const Body = ({ searchValue }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [initSearch, setInitSearch] = useState(INITIAL_SEARCH);
  const { loading, data, error, refetch } = useQuery(GET_DATA, {
    variables: { ids: initSearch },
  });

  useEffect(() => {
    console.log(searchValue);
  }, [searchValue]);

  if (loading) {
    return <Loading />;
  }

  if (error || data?.charactersByIds?.length === 0) {
    return <Error />;
  }

  const handlePageChange = (newPage) => {
    if (currentPage < newPage) {
      const newPag = initSearch.map((item) => item + ITEMS_PER_PAGE);
      setInitSearch(newPag);
    } else {
      const newPag = initSearch.map((item) => item - ITEMS_PER_PAGE);
      setInitSearch(newPag);
    }
    setCurrentPage(newPage);
    refetch();
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
      }}>
      {data?.charactersByIds.map((item) => (
        <div style={{ width: "33%" }} className="p-4">
          <Card character={item} />
        </div>
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={data?.characters?.info?.pages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Body;
