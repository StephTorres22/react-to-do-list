import SearchBar from "./Searchbar";
import "./App.css";
import ToDoCard from "./ToDoCard";
import Icon from "@mdi/react";
import { mdiPlusCircle } from "@mdi/js";
import { useState } from "react";
import ListForm from "./ListForm";
import { v4 as uuidv4 } from "uuid";

function App() {
  const intialToDo = { title: "", list: [], id: "" };
  const [toDoList, setToDoList] = useState([]);
  const [toDoItem, setToDoItem] = useState(intialToDo);
  const [isListModalOpen, setIsListModalOpen] = useState(false);
  const [item, setItem] = useState("");
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);

  function toggleItemModal() {
    setIsItemModalOpen(!isItemModalOpen);
  }

  function hanldeTitleChange(e) {
    const updatedToDo = {
      ...toDoItem,
      [e.target.name]: e.target.value,
      id: uuidv4(),
    };
    setToDoItem(updatedToDo);
  }

  /* List functions */

  function addNewToDoList(e) {
    e.preventDefault;
    const updatedToDoList = toDoList.toSpliced(0, 0, toDoItem).reverse();
    setToDoList(updatedToDoList);
    setToDoItem(intialToDo);
    setIsListModalOpen(!isListModalOpen);
    console.log(toDoList);
  }

  function removeToDoList(id) {
    const newList = toDoList.filter((list) => list.id !== id);
    setToDoList(newList);
  }

  /* Item Functions */
  function handleItemChange(e) {
    setItem(e.target.value);
    console.log(item);
  }

  function addItemToList(id) {
    const targetToDo = toDoList.filter((list) => list.id === id);
    if (item === "") {
      alert("Please input a value");
      return;
    }
    targetToDo[0].list.push(item);

    setItem("");
    toggleItemModal();
    console.log(toDoList);
  }

  return (
    <div style={{ width: "100%" }}>
      <SearchBar />
      <div className="card-display">
        {toDoList.map((item) => {
          return (
            <ToDoCard
              toDo={item}
              key={item.id}
              handleDelete={removeToDoList}
              handleAddItem={addItemToList}
              handleItemChange={handleItemChange}
              isOpen={isItemModalOpen}
              closeModal={toggleItemModal}
            />
          );
        })}
      </div>
      <Icon
        path={mdiPlusCircle}
        size={4}
        style={{
          position: "fixed",
          right: "1rem",
          bottom: "1rem",
          cursor: "pointer",
        }}
        onClick={() => {
          setIsListModalOpen(!isListModalOpen);
        }}
      />
      <ListForm
        isOpen={isListModalOpen}
        closeModal={() => setIsListModalOpen(!isListModalOpen)}
        handleAddToDoList={addNewToDoList}
        toDo={toDoItem}
        handleChange={hanldeTitleChange}
      ></ListForm>
    </div>
  );
}

export default App;
