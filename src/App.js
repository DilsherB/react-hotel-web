import "./App.css";
import Hero from "./Hero";
import Navbar from "./navbar";
import Rooms from "./rooms";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className="App-link">My Hotel</h1>
      <Hero />
      <Rooms />
    </div>
  );
}

export default App;
