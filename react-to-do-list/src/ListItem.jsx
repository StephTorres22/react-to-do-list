/* eslint-disable react/prop-types */
import { useState } from "react";
import Icon from "@mdi/react";
import { mdiDeleteOffOutline } from "@mdi/js";

const ListItem = ({ item, handleDelete }) => {
  const [isComplete, setIsComplete] = useState(false);

  const styles = {
    color: isComplete ? "lightgray" : "black",
    textDecorationLine: isComplete ? "line-through" : "none",
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <li style={styles}>{item.title}</li>
      <input
        type="checkbox"
        name="isComplete"
        id="isComplete"
        onClick={() => setIsComplete(!isComplete)}
      />
      <Icon path={mdiDeleteOffOutline} size={1} onClick={() => handleDelete(item.id)}/>
    </div>
  );
};

export default ListItem;
