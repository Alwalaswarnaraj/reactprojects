import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("");

  return (
    <div
      className="w-full h-screen duration-200 overflow-hidden"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-8 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
            onClick={()=>setColor('red')}
          >
            red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
            onClick={()=>setColor('green')}
          >
            green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-balck shadow-lg"
            style={{ backgroundColor: "pink" }}
            onClick={()=>setColor('pink')}
          >
            pink
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "yellow" }}
            onClick={()=>setColor('yellow')}
          >
            yellow
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
            onClick={()=>setColor("black")}
          >
            black
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "orange" }}
            onClick={()=>setColor("orange")}
          >
            orange
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blueviolet" }}
            onClick={()=>setColor("blueviolet")}
          >
            blue
          </button>
        </div>
      </div>  
    </div>

  );
}

export default App;
