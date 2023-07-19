import './index.css';
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <div className="form">
          <input type="text" />
          <button>
            <span>Add</span>
          </button>
        </div>
        <div>
          <ul>
            <List name="test" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
