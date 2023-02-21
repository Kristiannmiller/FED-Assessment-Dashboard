import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ScoreForm from "./components/ScoreForm/ScoreForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>FED Assessment User View Dashboard</h1>
      <ScoreForm />
    </div>
  );
}

export default App;
