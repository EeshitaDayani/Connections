"use client";

import { useState, useEffect } from "react";
import Card from "./card";
import { words, categories, shuffle, Word, Category } from "./model";

export default function Home() {
  const [randomWords, setRandomWords] = useState<Word[]>([]);
  const [selectedWords, setSelectedWords] = useState<Word[]>([]);
  const [matchedCategories, setMatchedCategories] = useState<number[]>([]);
  const [won, setWin] = useState(false);

  const handleClick = (word: Word) => {
    console.log(selectedWords);
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
    if (selectedWords.length === 4) {
      const firstCategory = selectedWords[0].category;
      const allSameCategory = selectedWords.every(
        (word) => word.category === firstCategory
      );

      if (allSameCategory) {
        const ids = selectedWords.map((word) => word.id);

        setRandomWords((prevWords) =>
          prevWords.map((word) =>
            ids.includes(word.id)
              ? { ...word, matched: true, selected: false }
              : word
          )
        );

        setMatchedCategories((prevCategories) => [
          ...prevCategories,
          firstCategory,
        ]);

        console.log(matchedCategories.sort());

        setSelectedWords([]);
      }
    }
  }, [selectedWords]);

  useEffect(() => {
    if ([1, 2, 3, 4].every((r) => matchedCategories.includes(r))) {
      setWin(true);
    }
  }, [matchedCategories]);

  return (
    <main className="flex h-screen flex-col justify-center items-center space-y-12">
      <span className="text-2xl text-center font-semibold">CONNECTIONS</span>
      {!won && (
        <div className="flex flex-wrap gap-4 p-4 justify-center">
          {randomWords.map((w) => (
            <Card key={w.id} word={w} handleClick={handleClick} />
          ))}
        </div>
      )}
      {!won && (
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
      )}
      {won && (
        <span className="text-3xl font-semibold text-center text-fuchsia-800 animate-bounce">
          CONGRATULIONS!
        </span>
      )}
    </main>
  );
}
