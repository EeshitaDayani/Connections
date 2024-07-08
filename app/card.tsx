import { useState, useEffect } from "react";
import { Word, longestWordLength } from "./model";

interface PropType {
  word: Word;
  handleClick: (word: Word) => void;
}

export default function Card({ word, handleClick }: PropType) {
  const [matched, setMatched] = useState(word.matched);

  useEffect(() => {
    setMatched(word.matched);
  }, [word.matched]);

  return (
    <div
      className={`w-[${longestWordLength}] h-20 rounded-md font-semibold p-2
      text-center content-center cursor-pointer 
      ${
        matched
          ? word.color
          : word.selected
          ? "bg-stone-700 text-slate-100"
          : "bg-stone-400 bg-opacity-25 text-black"
      }`}
      onClick={() => handleClick(word)}
    >
      {word.text}
    </div>
  );
}
