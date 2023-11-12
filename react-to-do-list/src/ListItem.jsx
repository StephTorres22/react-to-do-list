/* eslint-disable react/prop-types */

import Icon from "@mdi/react";
import { mdiDeleteOffOutline } from "@mdi/js";

const ListItem = ({ item, handleDelete, handleCheckClick }) => {
  const styles = {
    paddingRight: "1rem",
    color: item.isComplete ? "lightgray" : "black",
    textDecorationLine: item.isComplete ? "line-through" : "none",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <li style={styles}>{item.title}</li>
        <input
          type="checkbox"
          name="isComplete"
          id="isComplete"
          onClick={() => handleCheckClick(item.id)}
        />
      </div>

      <div>
        <Icon
          path={mdiDeleteOffOutline}
          size={1}
          onClick={() => handleDelete(item.id)}
        />
      </div>
    </div>
  );
};

export default ListItem;
