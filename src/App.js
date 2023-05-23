// import logo from './logo.svg';
import './App.css';
// import {Demo} from './components/Demo';
// import Demo1 from './components/Demo1';
// import Parent from './components/Parent';
//  import Demo2 from './components/Demo2';
import ToDoList from './components/ToDoList';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faEdit, faPlus);


function App() {
  return (
    <div className="App">
      {/* <Demo></Demo>
      <Demo1></Demo1> */}
      {/* <Parent ></Parent> */}
      {/* <Demo2></Demo2> */}
      <ToDoList></ToDoList>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
