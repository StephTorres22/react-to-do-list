import SearchBar from "./Searchbar";
import "./App.css";
import ToDoCard from "./ToDoCard";
import Icon from "@mdi/react";
import { mdiPlusCircle } from "@mdi/js";
import { useState } from "react";
import ListForm from "./ListForm";
import { v4 as uuidv4 } from "uuid";

function App() {
  const defaultItem = { title: "", id: "", isComplete: false };
  const intialToDo = { title: "", list: [], id: "" };
  const [toDoList, setToDoList] = useState([]);
  const [toDoItem, setToDoItem] = useState(intialToDo);
  const [isListModalOpen, setIsListModalOpen] = useState(false);
  const [item, setItem] = useState(defaultItem);
  const [incompleteTasks, setIncompleteTasks] = useState(0);

  function getTotalNumberOfTask() {
    for (let i = 0; i < toDoList.length; i++) {
      let toDo = toDoList[i];
      let total = 0;
      for (let j = 0; j < toDo.list.length; j++) {
        total += toDo.list.length;
      }
      return total;
    }
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
    //this is how you do it!, heres an array, with everything from toDoList (spread operator), and this new obj.
    const updatedToDoList = [...toDoList, toDoItem];

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
    const targetToDo = toDoList.filter((list) => list.id === id);

    if (item === "") {
      alert("Please input a value");
      return;
    }
    targetToDo[0].list.push(item);

    setItem(defaultItem);
    setIncompleteTasks(incompleteTasks + 1);
  }

  /* this is called on checkbox tick */
  function setItemComplete(id) {
    let targetItem = getTargetToDo(id)[1];
    let targetToDo = getTargetToDo(id)[0];

    /* re-assigns item.isComplete to opposite */
    const updatedItem = {
      ...targetItem,
      isComplete: !targetItem.isComplete,
    };

    if (updatedItem.isComplete == true) {
      setIncompleteTasks(incompleteTasks - 1);
    } else {
      setIncompleteTasks(incompleteTasks + 1);
    }

    /* removes old item, puts new item in it's place */
    const updatedList = targetToDo.list.toSpliced(
      targetToDo.list.indexOf(targetItem),
      1,
      updatedItem
    );

    /* re-assigns todos.list to new list */
    const updatedToDo = { ...targetToDo, list: updatedList };

    /* removes old todo and replaces with updated to do */
    const updatedToDoList = toDoList.toSpliced(
      toDoList.indexOf(targetToDo),
      1,
      updatedToDo
    );
    setToDoList(updatedToDoList);
  }

  /* gets 2 things, I know this is bad, but didn't want to re-write a nested for loop 2 times,  */
  function getTargetToDo(id) {
    for (let i = 0; i < toDoList.length; i++) {
      let toDo = toDoList[i];

      for (let j = 0; j < toDo.list.length; j++) {
        let item = toDo.list[j];
        if (item.id === id) {
          return [toDo, item];
        }
      }
    }
  }

  function deleteItemFromList(id) {
    const toDo = getTargetToDo(id)[0];
    const updatedList = toDo.list.filter((item) => item.id !== id);
    const updatedToDo = { ...toDo, list: updatedList };
    if (item.isComplete == false) {
      setIncompleteTasks(incompleteTasks - 1);
    }
    const updatedToDoList = toDoList.toSpliced(
      toDoList.indexOf(toDo),
      1,
      updatedToDo
    );

    setToDoList(updatedToDoList);
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
              handleDeleteItem={deleteItemFromList}
              handleCheckClick={setItemComplete}
            />
          );
        })}
      </div>
      <h1>Total: {getTotalNumberOfTask()}</h1>
      <h1>Total incomplete tasks: {incompleteTasks}</h1>
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
