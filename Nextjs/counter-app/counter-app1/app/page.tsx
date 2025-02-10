'use client'
import { useState } from "react";
import Image from "next/image";


export default function Home() {
  const [numState, setNumState] = useState<any>(0)

  const addToNumber = () => {
    setNumState(numState+1)
  }

  const subToNumber = () => {
    setNumState(numState-1)
  }

  return (
    <div className="e1">
      <p className="text-[60px] animate-bounce">My Counter App</p>
      <p className="font-bold animate-pulse text-[80px]">{numState}</p>
      
      <div className="flex flex-row gap-20">
        <button onClick={addToNumber} 
          className="text-4xl p-4 bg-blue-500 text-white rounded transition-transform transform hover:scale-110">+</button>
        <button onClick={subToNumber} 
          className="text-4xl p-4 bg-red-500 text-white rounded transition-transform transform hover:scale-110">-</button>
      </div>

    </div>
      
    
  );
}