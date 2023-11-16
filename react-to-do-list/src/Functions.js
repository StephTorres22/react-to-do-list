export function searchTaskByTitle(title, toDoList) {
  const filteredTasks = [];
  toDoList.forEach((toDo) => {
    if (toDo.list.length > 0) {
      let additions = toDo.list.filter((item) => item.title.includes(title));
      if (additions.length > 0) {
        filteredTasks.push(additions);
      }
    }
  });

  console.log(filteredTasks);
  return filteredTasks;
}
