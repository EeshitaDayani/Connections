"use client";

import { useState, useEffect } from "react";
import Card from "./card";
import { words, categories, shuffle, Word, Category } from "./model";

export default function Home() {
  const [randomWords, setRandomWords] = useState<Word[]>([]);
  const [selectedWords, setSelectedWords] = useState<Word[]>([]);
  const [matchedCategories, setMatchedCategories] = useState<number[]>([]);

  const handleClick = (word: Word) => {
    if (word.matched) return;

    if (word.selected) {
      setRandomWords((prevWords) =>
        prevWords.map((w) => (w.id === word.id ? { ...w, selected: false } : w))
      );
      setSelectedWords((prevSelected) =>
        prevSelected.filter((w) => w.id !== word.id)
      );
    } else {
      if (selectedWords.length < 4) {
        setRandomWords((prevWords) =>
          prevWords.map((w) =>
            w.id === word.id ? { ...w, selected: true } : w
          )
        );
        setSelectedWords((prevSelected) => [...prevSelected, word]);
      }
    }
  };

  useEffect(() => {
    setRandomWords(shuffle(words));
  }, []);

  useEffect(() => {
    if (selectedWords.length == 4) {
      let cat = selectedWords[0].category;

      selectedWords.forEach((w) => {
        if (w.category != cat) return;
      });

      let ids: number[] = [];

      selectedWords.forEach((w) => ids.push(w.id));

      setRandomWords((prevWords) =>
        prevWords.map((w) =>
          ids.includes(w.id) ? { ...w, matched: true, selected: false } : w
        )
      );

      setMatchedCategories([...matchedCategories, cat]);
      setSelectedWords([]);
    }
  }, [selectedWords]);

  return (
    <main className="flex h-screen flex-col justify-center items-center space-y-12">
      <span className="text-2xl text-center font-semibold">CONNECTIONS</span>
      <div className="flex flex-wrap gap-4 p-4 justify-center">
        {randomWords.map((w) => (
          <Card key={w.id} word={w} handleClick={handleClick} />
        ))}
      </div>
      <button
        className="border-2 border-slate-500 border-solid w-24 rounded-md text-center"
        onClick={() => {
          setSelectedWords([]);
          setRandomWords((prevWords) =>
            prevWords.map((w) => ({ ...w, selected: false }))
          );
        }}
      >
        CLEAR
      </button>
    </main>
  );
}
