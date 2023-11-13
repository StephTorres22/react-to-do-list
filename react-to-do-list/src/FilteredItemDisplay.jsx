/* eslint-disable react/prop-types */
import FilteredItem from "./FilterItem";

function FilteredItemDisplay({ arr, handleDelete }) {
  return (
    <div className="card-display">
      {arr.map((item) => {
        return (
          <FilteredItem key={item.id} item={item} handleDelete={handleDelete} />
        );
      })}
    </div>
  );
}

export default FilteredItemDisplay;
