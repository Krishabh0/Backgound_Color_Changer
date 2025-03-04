import React, { useState } from "react";  // Add React import
import ReactDOM from "react-dom/client";
import "./index.css"; // Ensure this file exists


function App() {
  const [color, setColor] = useState("olive");  

  return (
    <div 
      className="w-screen h-screen "
      style={{ backgroundColor: color }}
    >
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 duration-200">
    
   <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
   <button onClick={() => setColor("red")}
  className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
  style={{ backgroundColor: "red" }}
> Red
</button>
   <button onClick={()=>setColor("green")}
  className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
  style={{ backgroundColor: "green" }}
> green
</button>
   <button onClick={()=>setColor("blue")}
  className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
  style={{ backgroundColor: "blue" }}
> blue
</button>
   <button onClick={()=>setColor("black")}
  className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
  style={{ backgroundColor: "black" }}
> black
</button>
   <button onClick={()=>setColor("lavender")}
  className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
  style={{ backgroundColor: "lavender" }}
> lavender
</button>
   <button onClick={()=>setColor("purple")}
  className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
  style={{ backgroundColor: "purple" }}
> purple
</button>
   <button onClick={()=>setColor("yellow")}
  className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
  style={{ backgroundColor: "yellow" }}
> Yellow
</button>

    
    </div>  
   </div>
   
    </div>
  );
}

export default App;
