import "./App.css";
import Menu from "./menu";
import Navbar from "./navbar";
import Rooms from "./rooms";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className="App-link">React Hotel App</h1>
      <Menu />
      <Rooms />
    </div>
  );
}

export default App;
