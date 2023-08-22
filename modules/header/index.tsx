import React, { FC } from "react";
import { SearchInput } from "./searchInput";
import { SearchTypes } from "../../types/search.types";
const Header: FC<SearchTypes> = ({ search, searchValue }) => {
  return (
    <div className="flex justify-between">
      <SearchInput search={search} searchValue={searchValue} />
    </div>
  );
};

export default Header;
