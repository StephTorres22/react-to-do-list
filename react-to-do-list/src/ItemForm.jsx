/* eslint-disable react/prop-types */
import ReactModal from "react-modal";
import Icon from "@mdi/react";
import { mdiClose, mdiPlus } from "@mdi/js";

ReactModal.setAppElement("#root");

const ItemForm = ({
  isOpen,
  closeModal,
  handleAddToDoList,
  toDo,
  handleChange,
}) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "aut0",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
    input: {
      border: "none",
      backgroundColor: "#dad0d0",
    },

    legend: {
      marginBottom: "1rem",
      textDecorationLine: "underline",
      fontSize: "1.25rem",
    },
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <legend style={customStyles.legend}>Add a To Do List</legend>
      <form>
        <input
          type="text"
          name="title"
          placeholder="List Title"
          value={toDo.title}
          onChange={handleChange}
          style={customStyles.input}
        />
      </form>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
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

export default ItemForm;
