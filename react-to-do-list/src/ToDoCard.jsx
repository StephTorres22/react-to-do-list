/* eslint-disable react/prop-types */
import Icon from "@mdi/react";
import { mdiDeleteOffOutline } from "@mdi/js";
import { mdiPencilOutline } from "@mdi/js";

import ListItem from "./ListItem";

const ToDoCard = ({ toDo }) => {
  return (
    <div className="card">
      <div className="card__top">
        <h3>{toDo.title}</h3>
        <Icon path={mdiDeleteOffOutline} size={1} />
      </div>
      <div>
        <ul>
          {toDo.list.map((item) => {
            return <ListItem item={item} key={item} />;
          })}
        </ul>
      </div>
      <Icon
        path={mdiPencilOutline}
        size={1}
        style={{ position: "relative", left: "85%" }}
      />
    </div>
  );
};

export default ToDoCard;
