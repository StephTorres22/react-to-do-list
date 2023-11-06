/* eslint-disable react/prop-types */
import Icon from "@mdi/react";
import { mdiPencilOutline, mdiPlus, mdiDeleteOffOutline } from "@mdi/js";

import ListItem from "./ListItem";
import ItemForm from "./ItemForm";

const ToDoCard = ({
  toDo,
  handleDelete,
  handleAddItem,
  handleItemChange,
  item,
  isOpen,
  closeModal,
  handleDeleteItem,
}) => {
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
      <div>
        <ul>
          {toDo.list.map((item) => {
            return (
              <ListItem
                item={item}
                key={item.id}
                handleDelete={handleDeleteItem}
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
          onClick={closeModal}
        />
        <Icon path={mdiPencilOutline} size={1} className="icon" />
      </div>
      <ItemForm
        isOpen={isOpen}
        closeModal={closeModal}
        title={toDo.title}
        handleChange={handleItemChange}
        item={item}
        handleAddItemToList={() => handleAddItem(toDo.id)}
      />
    </div>
  );
};

export default ToDoCard;
