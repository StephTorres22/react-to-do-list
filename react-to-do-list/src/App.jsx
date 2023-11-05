import SearchBar from "./Searchbar";
import "./App.css";
import AddItem from "./AddItem";
import ToDoCard from "./ToDoCard";

const toDo = { title: "Test", list: [1, 2, 3] };
function App() {
  return (
    <div style={{ width: "100%" }}>
      <SearchBar />
      <ToDoCard toDo={toDo} />
      <AddItem />
    </div>
  );
}

export default App;
