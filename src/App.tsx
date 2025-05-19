import { useState } from "react";
import "./App.css";
import Router from "./Router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-5xl">
        <Router />
      </div>
    </div>
  );
}

export default App;
