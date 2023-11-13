export function searchTaskByTitle(title, toDoList) {
  const filteredTasks = [];
  toDoList.forEach((toDo) => {
    if (toDo.list.length !== 0) {
      let additions = toDo.list.filter((item) => item.title.includes(title));
      if (additions.length !== 0) {
        filteredTasks.push(additions);
      }
    }
  });

  /* this makes sure no empty arrays are passed down/forward, so filtered obj don't appear in weird positions */
  /* for (let i = 0; i < filteredTasks.length; i++) {
    if (filteredTasks[i].length === 0) {
      filteredTasks.splice(filteredTasks.indexOf(filteredTasks[i]), 1);
    }
  } */
  console.log(filteredTasks);
  return filteredTasks;
}
