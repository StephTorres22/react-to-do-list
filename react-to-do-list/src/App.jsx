import SearchBar from "./Searchbar";
import "./App.css";
import ToDoCard from "./ToDoCard";
import Icon from "@mdi/react";
import { mdiPlusCircle } from "@mdi/js";
import { useState } from "react";
import ListForm from "./ListForm";
import { v4 as uuidv4 } from "uuid";

function App() {
  const defaultItem = { title: "", id: "" };
  const intialToDo = { title: "", list: [], id: "" };
  const [toDoList, setToDoList] = useState([]);
  const [toDoItem, setToDoItem] = useState(intialToDo);
  const [isListModalOpen, setIsListModalOpen] = useState(false);
  const [item, setItem] = useState(defaultItem);
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
    if (toDoItem.title === "") {
      alert("Pleast give your To Do a name");
      return;
    }
    const updatedToDoList = toDoList.toSpliced(
      toDoList.length - 1,
      0,
      toDoItem
    );
    setToDoList(updatedToDoList);
    setToDoItem(intialToDo);
    setIsListModalOpen(!isListModalOpen);
  }

  function removeToDoList(id) {
    const newList = toDoList.filter((list) => list.id !== id);
    setToDoList(newList);
  }

  /* Item Functions */
  function handleItemChange(e) {
    const updatedItem = {
      ...item,
      [e.target.name]: e.target.value,
      id: uuidv4(),
    };
    setItem(updatedItem);
  }

  function addItemToList(id) {
    console.log(id);
    const targetToDo = toDoList.filter((list) => list.id === id);
    console.log(targetToDo);
    if (item === "") {
      alert("Please input a value");
      return;
    }
    targetToDo[0].list.push(item);

    setItem(defaultItem);
    toggleItemModal();
  }

  function getTargetToDo(id) {
    for (let i = 0; i < toDoList.length; i++) {
      let toDo = toDoList[i];

      for (let j = 0; j < toDo.list.length; j++) {
        let item = toDo.list[j];
        if (item.id === id) {
          return [toDo, toDoList.indexOf(toDo)];
        }
      }
    }
  }

  function deleteItemFromList(id) {
    const toDo = getTargetToDo(id)[0];
    const updatedList = toDo.list.filter((item) => item.id !== id);
    const updatedToDo = { ...toDo, list: updatedList };
    const updatedToDoList = toDoList.toSpliced(
      getTargetToDo(id)[1],
      1,
      updatedToDo
    );

    setToDoList(updatedToDoList);
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
              handleDeleteItem={deleteItemFromList}
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
