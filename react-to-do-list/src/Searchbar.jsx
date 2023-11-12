/* eslint-disable react/prop-types */

import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

const SearchBar = ({ onChange, handleSearch, searchBarValue }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "100%",
        paddingTop: "1rem",
        transform: "translate(20%)",
        gap: "1rem",
      }}
    >
      <input
        type="text"
        name="searchBar"
        /* defaultValue={searchBarValue} */
        value={searchBarValue}
        id="searchBar"
        onChange={onChange}
        placeholder="Search"
        style={{
          font: "1rem",
          height: "1.5rem",
          borderRadius: "5px",
          width: "25rem",

          paddingLeft: "5px",
        }}
      />
      <Icon
        path={mdiMagnify}
        size={1.5}
        style={{ cursor: "pointer" }}
        onClick={() => handleSearch(searchBarValue)}
      />
    </div>
  );
};

export default SearchBar;
