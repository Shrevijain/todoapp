import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import data from "./data.json";
import TodoList from "./TodoList";
import ToDoForm from "./ToDoForm";

import Table from "./Table";

function App() {
  const [todoList, setTodoList] = useState(data);

  const handleToggle = (id) => {
    let mapped = todoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setTodoList(mapped);
  };

  const handleFilter = () => {
    let filtered = todoList.filter((task) => {
      return !task.complete;
    });
    setTodoList(filtered);
  };

  const addTask = (userInput) => {
    let copy = [...todoList];
    copy = [
      ...copy,
      { id: todoList.length + 1, task: userInput, complete: false },
    ];
    setTodoList(copy);
  };

  const [formInputData, setformInputData] = useState({
    StudentName: "",
    University: "",
    subject1: "",
    subject2: "",
    subject3: "",
    gender: "",
  });
  const [tableData, setTableData] = useState([]);

  const handleInputChange = (e) => {
    let val = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    if (e.target.checked === true) val = e.target.value;
    setformInputData((ans) => ({ ...ans, [e.target.name]: val }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formInputData);

    const checkEmptyInput = !Object.values(formInputData).every(
      (res) => res === ""
    );
    if (checkEmptyInput) {
      const newData = (array) => [...array, formInputData];
      setTableData(newData);
      setformInputData({
        StudentName: "",
        University: "",
        subject1: "",
        subject2: "",
        subject3: "",
        gender: "",
      });
    }
    console.log(formInputData);
  };

  //  function handleInputChange(e) {
  //    const val = e.target.type === "checkbox" ? e.target.checked : e.target.value;

  //    setformInputData((ans) => ({
  //     ...ans,[e.target.name]: val
  //    }));
  //  }

  return (
    <div className="App">
      <Header></Header>
      <TodoList
        todoList={todoList}
        handleToggle={handleToggle}
        handleFilter={handleFilter}
      />
      <ToDoForm addTask={addTask} />
      <br></br>
      <form onSubmit={handleSubmit}>
        <div className="form-row row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="StudentName"
              name="StudentName"
              value={formInputData.StudentName}
              onChange={handleInputChange}
            />
          </div>
          <div className="col">
            <select
              name="University"
              onChange={handleInputChange}
              value={formInputData.University}
              className="form-control"
            >
              <option className="form-control" name="University" value="">
                --Select your Universty--
              </option>
              <option className="form-control" name="University">
                aa
              </option>
              <option className="form-control" name="University">
                bb
              </option>
              <option className="form-control" name="University">
                cc
              </option>
              <option className="form-control" name="University">
                dd
              </option>
            </select>
          </div>
          <div className="col">
            <label>Subject</label>
            <br></br>
            <input
              type="checkbox"
              checked={formInputData.name}
              onChange={handleInputChange}
              name="subject1"
              value="x"
            />
            <label>x</label>
            <input
              type="checkbox"
              checked={formInputData.name}
              onChange={handleInputChange}
              name="subject2"
              value="y"
            />
            <label>y</label>
            <input
              type="checkbox"
              checked={formInputData.name}
              onChange={handleInputChange}
              name="subject3"
              value="z"
            />
            <label>z</label>
          </div>

          <div className="col">
            <label>Gender</label> <br></br>
            <input
              type="radio"
              name="gender"
              checked={formInputData.gender === "male"}
              onChange={handleInputChange}
              value="male"
            />
            <label>Male</label>
            <input
              type="radio"
              name="gender"
              checked={formInputData.gender === "female"}
              onChange={handleInputChange}
              value="female"
            />
            <label>Female</label>
          </div>
          <div className="col">
            <input type="submit" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <Table tableData={tableData} />
    </div>
  );
}

export default App;
