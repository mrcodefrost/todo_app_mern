import ToDo from "./components/ToDo";


function App() {
  return (
    <div className="App">
     
    <div className="container">

    <h1>ToDo App</h1>

    <div className="top">
      <input
      type="text"
      placeholder="Add ToDo"
      />

      <div className="add">Add</div>
    </div>

    <div className="list"></div>

      <ToDo text="Learn React"/>

    </div>

    </div>
  );
}

export default App;
