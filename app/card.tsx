import { useState } from "react";
import { Word } from "./model";

interface PropType {
  word: Word;
}

export default function Card({ word }: PropType) {
  const [selected, setSelected] = useState(word.selected);

  const handleClick = () => {
    setSelected((prevSelected) => !prevSelected);
  };

  return (
    <div
      className={`w-[82px] h-20 rounded-md font-semibold 
    text-center content-center text-md cursor-pointer ${
      selected ? "bg-gray-700 text-slate-100" : "bg-slate-200 text-black"
    }`}
      onClick={handleClick}
    >
      {word.text}
    </div>
  );
}
