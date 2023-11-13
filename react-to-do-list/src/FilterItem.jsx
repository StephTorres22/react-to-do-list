/* eslint-disable react/prop-types */
import Icon from "@mdi/react";
import { mdiDeleteOffOutline } from "@mdi/js";

function FilteredItem({ item, handleDelete }) {
  return (
    <div>
      {item.length !== 0
        ? item.map((item) => {
            return (
              <div className="filtered_item" key={item.id}>
                <h3 style={{ textDecoration: "underline" }}>{item.title}</h3>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <p>Is complete: {`${item.isComplete}`}</p>
                  <Icon
                    path={mdiDeleteOffOutline}
                    size={1}
                    className="icon"
                    onClick={() => handleDelete(item.id)}
                  ></Icon>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default FilteredItem;
