/* eslint-disable react/prop-types */

import ToDoCard from "./ToDoCard";

function ToDoCardDisplay({
  toDoList,
  handleDelete,
  handleAddItem,
  handleItemChange,
  handleDeleteItem,
  setItemComplete,
}) {
  return (
    <div className="card-display">
      {toDoList.map((item) => {
        return (
          <ToDoCard
            toDo={item}
            key={item.id}
            handleDelete={handleDelete}
            handleAddItem={handleAddItem}
            handleItemChange={handleItemChange}
            handleDeleteItem={handleDeleteItem}
            handleCheckClick={setItemComplete}
          />
        );
      })}
    </div>
  );
}

export default ToDoCardDisplay;
