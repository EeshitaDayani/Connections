"use client";

import { useState, useEffect } from "react";
import Card from "./card";
import { words, categories, shuffle, Word } from "./model";

export default function Home() {
  const [randomWords, setRandomWords] = useState<Word[]>([]);

  useEffect(() => {
    setRandomWords(shuffle(words));
  }, []);

  return (
    <main className="flex h-screen flex-col justify-center items-center space-y-12">
      <span className="text-2xl text-center font-semibold">CONNECTIONS</span>
      <div className="flex flex-wrap gap-4 p-4 justify-center">
        {randomWords.map((w) => (
          <Card key={w.id} word={w} />
        ))}
      </div>
      <button className="border-2 border-slate-500 border-solid w-24 rounded-md text-center">
        CLEAR
      </button>
    </main>
  );
}
