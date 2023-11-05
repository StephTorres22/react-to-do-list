/* eslint-disable react/prop-types */
import { useState } from "react";

const ListItem = ({ item }) => {
  const [isComplete, setIsComplete] = useState(false);

  const styles = {
    color: isComplete ? "lightgray" : "black",
    textDecorationLine: isComplete ? "line-through" : "none",
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <li style={styles}>{item}</li>
      <input
        type="checkbox"
        name="isComplete"
        id="isComplete"
        onClick={() => setIsComplete(!isComplete)}
      />
    </div>
  );
};

export default ListItem;
