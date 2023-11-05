import SearchBar from "./Searchbar";
import "./App.css";
import ToDoCard from "./ToDoCard";
import Icon from "@mdi/react";
import { mdiPlusCircle } from "@mdi/js";
import { useState } from "react";
import ItemForm from "./ItemForm";


function App() {
  const intialToDo = { title: "", list: [] };
  const [toDoList, setToDoList] = useState([]);
  const [toDoItem, setToDoItem] = useState(intialToDo)
  const [isOpen, setIsOpen] = useState(false);

  function hanldeTitleChange(e) {
    const updatedToDo = {...toDoItem, [e.target.name]: e.target.value};
    setToDoItem(updatedToDo);
  }

  function addNewToDoList(e) {
    e.preventDefault    
    const updatedToDoList = toDoList.toSpliced(0, 0, toDoItem).reverse();
    setToDoList(updatedToDoList)
    setToDoItem(intialToDo)
    setIsOpen(!isOpen);
  }
  
  return (
    <div style={{ width: "100%" }}>
      <SearchBar />
      <div className="card-display">
        {toDoList.map((item) => {
          return <ToDoCard toDo={item} key={item} />;
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
          setIsOpen(!isOpen);
        }}
      />
      <ItemForm
        isOpen={isOpen}
        closeModal={() => setIsOpen(!isOpen)}
        handleAddToDoList={addNewToDoList}
        toDo={toDoItem}
        handleChange={hanldeTitleChange}
      ></ItemForm>
    </div>
  );
}

export default App;
