/* eslint-disable react/prop-types */
import ReactModal from "react-modal";
import Icon from "@mdi/react";
import { mdiClose, mdiPlus } from "@mdi/js";

ReactModal.setAppElement("#root");

const ItemForm = ({
  isOpen,
  closeModal,
  item,
  handleChange,
  handleAddItemToList,
  title
}) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={closeModal} className="modal">
      <legend>Add Item to {title} List</legend>
      <input
        type="text"
        name="title"
        placeholder="To Do"
        value={item}
        onChange={handleChange}
      ></input>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Icon
          path={mdiPlus}
          size={1.5}
          onClick={handleAddItemToList}
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
