import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import data from "./data.json";
import TodoList from "./TodoList";
import ToDoForm from "./ToDoForm";
import Select from "react-select";
//import { Link, Route, Routes } from "react-router-dom";
import Table from "./Table";
// import { faRandom } from "@fortawesome/free-solid-svg-icons";

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
  const [tableData, setTableData] = useState([]);
  const [selected, setSelected] = useState({ SelectOption: "" });
  const [formInputData, setformInputData] = useState({
    StudentName: "",
    University: "",
    subject1: "",
    subject2: "",
    subject3: "",
    gender: "",
  });

  const option = [
    { name: "FilterOp", value: "aa", label: "aa" },
    { name: "FilterOp", value: "bb", label: "bb" },
    { name: "FilterOp", value: "cc", label: "cc" },
    { name: "FilterOp", value: "dd", label: "dd" },
  ];

  const handleInputChange = (e) => {
    let val = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    if (e.target.checked) {
      val = e.target.value;
    }
    setformInputData((ans) => ({ ...ans, [e.target.name]: val }));
  };

  const handleSelectChange = (e) => {
    setSelected(e.value);
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
  };

  const handleDeleteRow = (index) => {
    const newRow = [...tableData];
    const deleteRow = tableData.findIndex((data) => data.index === index);
    newRow.splice(deleteRow, 1);
    setTableData(newRow);
  };

  const handleFilterSubmit = (event) => {
    event.preventDefault();
    //console.log(tableData);
    //console.log(selected);
    if (!selected) {
      return tableData;
    }

    let filtered = tableData.filter((task) => {
      //console.log(task.University, selected);
      return task.University == selected;
    });

    setTableData(filtered);
    console.log(filtered);
  };

  return (
    <div className="App">
      <br />
      <a href="NewPage.js" target="_blank">
        New Page
      </a>
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
              <option name="University">aa</option>
              <option name="University">bb</option>
              <option name="University">cc</option>
              <option name="University">dd</option>
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
              checked={formInputData.gender === "Male"}
              onChange={handleInputChange}
              value="Male"
            />
            <label>Male</label>
            <input
              type="radio"
              name="gender"
              checked={formInputData.gender === "Female"}
              onChange={handleInputChange}
              value="Female"
            />
            <label>Female</label>
          </div>
          <div className="col">
            <input type="submit" className="btn btn-primary" />
          </div>
        </div>
      </form>

      <br />
      <br />

      <form onSubmit={handleFilterSubmit}>
        <div className="form-row row">
          <div className="col">
            <Select options={option} onChange={handleSelectChange} />
          </div>

          {/* <div className="col">
            <select
              list="data"
              name="SelectOption"
              onChange={handleSelectChange}
              value={selected.SelectOption}
              placeholder="Select your University"
            >     
            <option name="SelectedOption" value="">Filter University</option>      
              <option name="SelectOption">aa</option>
              <option name="SelectOption">bb</option>
              <option name="SelectOption">cc</option>
              <option name="SelectOption">dd</option>
              </select> 
          </div> */}

          <div className="col">
            <input type="submit" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <br />
      <br />
      <Table tableData={tableData} handleDeleteRow={handleDeleteRow} />
    </div>
  );
}

export default App;
{
}
