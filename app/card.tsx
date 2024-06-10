import React from "react";
import { Word } from "./model";

interface PropType {
  word: Word;
  handleClick: (word: Word) => void;
}

export default function Card({ word, handleClick }: PropType) {
  return (
    <div
      className={`w-[82px] h-20 rounded-md font-semibold 
    text-center content-center text-md cursor-pointer ${
      word.selected ? "bg-gray-700 text-slate-100" : "bg-slate-200 text-black"
    } ${word.matched ? word.color : ""}`}
      onClick={() => handleClick(word)}
    >
      {word.text}
    </div>
  );
}
