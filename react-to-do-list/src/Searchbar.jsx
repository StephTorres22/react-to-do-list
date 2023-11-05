import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

const SearchBar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "100%",
        paddingTop: "1rem",
        gap: "1rem",
      }}
    >
      <input
        type="text"
        style={{
          font: "1rem",
          height: "1.5rem",
          borderRadius: "5px",
          width: "25%",
          paddingLeft: "5px",
        }}
      />
      <Icon path={mdiMagnify} size={1.5} style={{ cursor: "pointer" }} />
    </div>
  );
};

export default SearchBar;
