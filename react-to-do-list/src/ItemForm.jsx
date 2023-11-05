/* eslint-disable react/prop-types */
import ReactModal from "react-modal";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";

const ItemForm = ({ isOpen, closeModal }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div>I am a modal</div>
      <form>
        <input />
        <button>tab navigation</button>
        <button>stays</button>
        <button>inside</button>
        <button>the modal</button>
      </form>
      <Icon path={mdiClose} size={2} onClick={closeModal} style={{cursor: "pointer"}}></Icon>
    </ReactModal>
  );
};

export default ItemForm;
