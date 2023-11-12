/* eslint-disable react/prop-types */
function FilteredItem({ item }) {
  return (
    <div>
      {item.map((item) => {
        console.log(item);
        return (
          <div className="filtered_item" key={item.id}>
            <p>{item.title}</p>
            <p>Is complete: {`${item.isComplete}`}</p>
          </div>
        );
      })}
    </div>
  );
}

export default FilteredItem;
