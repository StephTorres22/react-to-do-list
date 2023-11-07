/* eslint-disable react/prop-types */

import Icon from "@mdi/react";
import { mdiDeleteOffOutline } from "@mdi/js";

const ListItem = ({ item, handleDelete, handleCheckClick }) => {
  const styles = {
    color: item.isComplete ? "lightgray" : "black",
    textDecorationLine: item.isComplete ? "line-through" : "none",
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <li style={styles}>{item.title}</li>
      <input
        type="checkbox"
        name="isComplete"
        id="isComplete"
        onClick={() => handleCheckClick(item.id)}
      />
      <Icon
        path={mdiDeleteOffOutline}
        size={1}
        onClick={() => handleDelete(item.id)}
      />
    </div>
  );
};

export default ListItem;
