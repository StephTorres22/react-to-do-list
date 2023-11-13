import { describe, expect, test, it } from "@jest/globals";
//import App from "./App";
import { searchTaskByTitle } from "./Functions";

describe("Filtered tasks array tests", () => {
  it("Should return two array", () => {
    const cardOne = {
      title: "test 1",
      list: [{ title: "this should not come up" }],
    };
    const cardTwo = { title: "test 2", list: [{ title: "has two" }] };
    const cardThree = { title: "test 3", list: [{ title: "has two also" }] };
    const toDoList = [cardOne, cardTwo, cardThree];

    const actual = searchTaskByTitle("two", toDoList);

    expect(actual).toEqual([cardTwo.list, cardThree.list]);
  });
});
