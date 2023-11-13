/* eslint-disable react/prop-types */
import FilteredItem from "./FilterItem";

function FilteredItemDisplay({ arr, handleDelete }) {
  function removeExtra(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].length === 0) {
        array.splice(array.indexOf(array[i]), 1);
      }
    }
  }

  const filter = removeExtra(arr);
  return (
    <div className="card-display">
      {filter.map((item) => {
        return (
          <FilteredItem key={item.id} item={item} handleDelete={handleDelete} />
        );
      })}
    </div>
  );
}

export default FilteredItemDisplay;
