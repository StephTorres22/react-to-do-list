/* eslint-disable react/prop-types */
import SearchBar from "./Searchbar";

function Header({
  handleSearch,
  onInputChange,
  searchBarValue,
  incompleteTasks,
  total,
}) {
  //this doesn't quite work as expected, doesn't update on adding new tasks, does it on new card, or setting task to complete/delete
  /* const [total, setTotal] = useState("0");

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < toDoList.length; i++) {
      let toDo = toDoList[i];

      total += toDo.list.length;
      setTotal(total);
    }
  }, [toDoList]); */
  //function getTotalNumberOfTask() {}
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h2>Total number of tasks: {total}</h2>
      <SearchBar
        handleSearch={handleSearch}
        onChange={onInputChange}
        searchBarValue={searchBarValue}
      />
      <h2>Total incomplete tasks: {incompleteTasks}</h2>
    </div>
  );
}

export default Header;
