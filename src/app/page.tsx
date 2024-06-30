"use client"
import Image from "next/image";
import Task from "./components/Task";
import { useState } from "react";

export default function Home() {

  const [component, setComponent] = useState([]);
  const [toDo, setToDo] = useState("");

  function handleButtonClick(){
    setComponent([...component, <Task key={component.length} text={toDo}/>])
    setToDo("");
  };

  return (
    <>
      <div className="w-full h-screen bg-black flex flex-col justify-start items-center">
          <div className="w-3/4 sm:w-2/4 md:w-2/5 lg:w-1/3 h-36 bg-slate-800 rounded-xl flex flex-col items-center justify-center gap-2 mt-2">

              <h1 className="font-bold text-purple-500">Tasks To Do</h1>

              <input type="text" 
              className="rounded p-1 bg-slate-500 outline-purple-200 focus:bg-slate-400  text-white"
              onChange={(e)=>setToDo(e.target.value)} />
              
              <button className="p-2 bg-purple-500 text-white rounded-md" 
              onClick={handleButtonClick}>Add Task</button>
          </div>
        
          {component}
        
      </div>
    </>
  );
}
