/* eslint-disable react/prop-types */
import SearchBar from "./Searchbar";

function Header({
  handleSearch,
  onInputChange,
  searchBarValue,
  incompleteTasks,
  toDoList
}) {

    function getTotalNumberOfTask() {
        let total = 0;
        for (let i = 0; i < toDoList.length; i++) {
          let toDo = toDoList[i];
    
          total += toDo.list.length;
          return total;
        }
      }
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h2>Total: {getTotalNumberOfTask() ? getTotalNumberOfTask() : 0}</h2>
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
