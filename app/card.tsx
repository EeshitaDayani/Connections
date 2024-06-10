import { useState, useEffect } from "react";
import { Word } from "./model";

interface PropType {
  word: Word;
  handleClick: (word: Word) => void;
}

export default function Card({ word, handleClick }: PropType) {
  const [selected, setSelected] = useState(word.selected);

  useEffect(() => {
    setSelected(word.selected);
  }, [word.selected]);

  return (
    <div
      className={`w-[82px] h-20 rounded-md font-semibold 
    text-center content-center text-md cursor-pointer ${
      selected ? "bg-gray-700 text-slate-100" : "bg-slate-200 text-black"
    }`}
      onClick={() => handleClick(word)}
    >
      {word.text}
    </div>
  );
}
