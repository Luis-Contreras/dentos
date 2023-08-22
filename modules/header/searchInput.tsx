import React, { FC } from "react";
import Input from "../../components/input";
import { SearchTypes } from "../../types/search.types";

export const SearchInput: FC<SearchTypes> = ({ search, searchValue }) => {
  return (
    <div className="flex justify-between items-center">
      Buscar:
      <div style={{ padding: "4px" }}>
        <Input onChange={(e) => search(e)} value={searchValue} />
      </div>
    </div>
  );
};
