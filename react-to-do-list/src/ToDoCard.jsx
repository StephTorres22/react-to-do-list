/* eslint-disable react/prop-types */
import Icon from "@mdi/react";
import { mdiPencilOutline, mdiPlus, mdiDeleteOffOutline } from "@mdi/js";
import { useState } from "react";
import ListItem from "./ListItem";
import ItemForm from "./ItemForm";

const ToDoCard = ({
  toDo,
  handleDelete,
  handleAddItem,
  handleItemChange,
  item,
  handleDeleteItem,
  handleCheckClick,
}) => {
  function toggleItemModal() {
    setIsItemModalOpen(!isItemModalOpen);
  }

  const [isItemModalOpen, setIsItemModalOpen] = useState(false);

  return (
    <div className="card">
      <div className="card__top">
        <h3>{toDo.title}</h3>
        <Icon
          path={mdiDeleteOffOutline}
          size={1}
          className="icon"
          //need to have this like this so that the function is not called straight away!
          onClick={() => handleDelete(toDo.id)}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          flex: "1 0 auto",
          paddingTop: "0",
          marginTop: "0",
        }}
      >
        <ul style={{ display: "flex", flexDirection: "column", flex: "1 0 auto",}}>
          {toDo.list.map((item) => {
            return (
              <ListItem
                item={item}
                key={item.id}
                handleDelete={handleDeleteItem}
                handleCheckClick={handleCheckClick}
              />
            );
          })}
        </ul>
      </div>
      <div className="card__bottom">
        <Icon
          path={mdiPlus}
          size={1.25}
          className="icon"
          onClick={toggleItemModal}
        />
        <Icon path={mdiPencilOutline} size={1} className="icon" />
      </div>
      <ItemForm
        key={toDo.id}
        isOpen={isItemModalOpen}
        closeModal={toggleItemModal}
        title={toDo.title}
        handleChange={handleItemChange}
        item={item}
        handleAddItemToList={() => {
          handleAddItem(toDo.id);
          toggleItemModal();
        }}
      />
    </div>
  );
};

export default ToDoCard;
