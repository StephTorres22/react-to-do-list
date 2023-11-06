/* eslint-disable react/prop-types */
import ReactModal from "react-modal";
import Icon from "@mdi/react";
import { mdiClose, mdiPlus } from "@mdi/js";

ReactModal.setAppElement("#root");

const ListForm = ({
  isOpen,
  closeModal,
  handleAddToDoList,
  toDo,
  handleChange,
}) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={closeModal} className="modal">
      <legend>Add a To Do List</legend>
      <form>
        <input
          type="text"
          name="title"
          placeholder="List Title"
          value={toDo.title}
          onChange={handleChange}
        />
      </form>
      <div>
        <Icon
          path={mdiPlus}
          size={1.5}
          onClick={handleAddToDoList}
          style={{ cursor: "pointer" }}
        />
        <Icon
          path={mdiClose}
          size={1.5}
          onClick={closeModal}
          style={{ cursor: "pointer" }}
        ></Icon>
      </div>
    </ReactModal>
  );
};

export default ListForm;
