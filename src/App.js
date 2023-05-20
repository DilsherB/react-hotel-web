import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/navbar";
import Rooms from "./components/rooms";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Rooms />
    </div>
  );
}

export default App;
