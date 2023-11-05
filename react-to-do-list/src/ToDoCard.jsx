/* eslint-disable react/prop-types */
import Icon from "@mdi/react";
import { mdiDeleteOffOutline } from "@mdi/js";
import { mdiPencilOutline } from "@mdi/js";


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
            return <li key={item}>{item}</li>;
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
