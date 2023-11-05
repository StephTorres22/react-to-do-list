/* eslint-disable react/prop-types */
import Icon from "@mdi/react";
import { mdiDeleteOffOutline } from "@mdi/js";
import { mdiPencilOutline, mdiPlus } from "@mdi/js";

import ListItem from "./ListItem";

const ToDoCard = ({ toDo, handleDelete, handlePlusClick }) => {
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
            return <ListItem item={item} key={item} />;
          })}
        </ul>
      </div>
      <div className="card__bottom">
        <Icon
          path={mdiPlus}
          size={1.25}
          className="icon"
          onClick={handlePlusClick}
        />
        <Icon path={mdiPencilOutline} size={1} className="icon" />
      </div>
    </div>
  );
};

export default ToDoCard;
