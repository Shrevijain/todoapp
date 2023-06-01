import React from "react";
import ToDo from "./ToDo";

const TodoList = ({ todoList, handleToggle, handleFilter }) => {
  return (
    <div>
      {todoList.map((todo) => {
        return (
          <ToDo
            todo={todo}
            handleToggle={handleToggle}
            handleFilter={handleFilter}
          />
        );
      })}
      <button style={{ margin: "20px" }} onClick={handleFilter}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;
