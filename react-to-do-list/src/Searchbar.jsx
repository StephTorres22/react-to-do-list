import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

const SearchBar = () => {
  return (
    <div style={{ textAlign: "center", width: "100%" }}>
      <input type="text" />
      <Icon path={mdiMagnify} size={2} style={{cursor: "pointer"}}/>
    </div>
  );
};

export default SearchBar;
