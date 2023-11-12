/* eslint-disable react/prop-types */
import FilteredItem from "./FilterItem";

function FilteredItemDisplay({ arr }) {
  return (
    
    <div>
      {arr.map((item) => {
        return <FilteredItem key={item.id} item={item} />;
      })}
      ;
    </div>
  );
}

export default FilteredItemDisplay;
