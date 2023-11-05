import SearchBar from "./Searchbar";
import "./App.css";
import ToDoCard from "./ToDoCard";
import Icon from "@mdi/react";
import { mdiPlusCircle } from "@mdi/js";
import { useState } from "react";
import ItemForm from "./ItemForm";

const toDo = { title: "Test", list: [1, 2, 3] };
function App() {
  // const [toDoList, setToDoList] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
  //const handleAdd = () => {};
  return (
    <div style={{ width: "100%" }}>
      <SearchBar />
      <div className="card-display">
        <ToDoCard toDo={toDo} />
        <ToDoCard toDo={toDo} />
        <ToDoCard toDo={toDo} />
        <ToDoCard toDo={toDo} />
        <ToDoCard toDo={toDo} />
        <ToDoCard toDo={toDo} />
        <ToDoCard toDo={toDo} />
        <ToDoCard toDo={toDo} />
        <ToDoCard toDo={toDo} />
        <ToDoCard toDo={toDo} />
        <ToDoCard toDo={toDo} />
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
      ></ItemForm>
    </div>
  );
}

export default App;
