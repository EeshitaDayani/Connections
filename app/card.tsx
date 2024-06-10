import { useState } from "react";
import { Word } from "./model";

interface PropType {
  word: Word;
}

export default function Card({ word }: PropType) {
  const [selected, setSelected] = useState(word.selected);

  const handleClick = () => {
    setSelected(!selected);
    console.log(selected);
  };

  return (
    <div
      className={`w-[82px] h-20 rounded-md bg-slate-200 font-semibold 
    text-center content-center text-md ${
      selected ? " bg-gray-700 text-slate-100" : "bg-slate-200 text-black"
    }`}
      onClick={handleClick}
    >
      {word.text}
    </div>
  );
}
