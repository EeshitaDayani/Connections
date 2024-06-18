"use client";

import { useState, useEffect } from "react";
import Card from "./card";
import { words, categories, shuffle, Word, wordsAndCategories } from "./model";

export default function Home() {
  const [gameWords, setGameWords] = useState<Word[]>([]);
  const [selectedWords, setSelectedWords] = useState<Word[]>([]);
  const [matchedCategories, setMatchedCategories] = useState<number[]>([]);
  const [lives, setLives] = useState([1, 2, 3, 4]);
  const [won, setWin] = useState(false);
  const [lost, setLost] = useState(false);

  const handleClick = (word: Word) => {
    console.log(selectedWords);
    if (word.matched) return;

    if (word.selected) {
      setGameWords((prevWords) =>
        prevWords.map((w) => (w.id === word.id ? { ...w, selected: false } : w))
      );
      setSelectedWords((prevSelected) =>
        prevSelected.filter((w) => w.id !== word.id)
      );
    } else {
      if (selectedWords.length < 4) {
        setGameWords((prevWords) =>
          prevWords.map((w) =>
            w.id === word.id ? { ...w, selected: true } : w
          )
        );
        setSelectedWords((prevSelected) => [...prevSelected, word]);
      }
    }
  };

  useEffect(() => {
    setGameWords(shuffle(words));
  }, []);

  useEffect(() => {
    if (selectedWords.length === 4) {
      const firstCategory = selectedWords[0].category;
      const allSameCategory = selectedWords.every(
        (word) => word.category === firstCategory
      );

      if (allSameCategory) {
        const ids = selectedWords.map((word) => word.id);

        setGameWords((prevWords) =>
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

        setSelectedWords([]);
      } else {
        lives.pop();
        setLives([...lives]);
      }
    }
  }, [selectedWords]);

  useEffect(() => {
    if ([1, 2, 3, 4].every((r) => matchedCategories.includes(r))) {
      setWin(true);
    }
  }, [matchedCategories]);

  useEffect(() => {
    if (lives.length === 0) {
      setLost(true);
    }
  }, [lives]);

  return (
    <main className="flex h-screen flex-col justify-center items-center space-y-12">
      {!won && !lost && (
        <div className="flex h-screen flex-col justify-center items-center space-y-12">
          <span className="text-2xl text-center font-semibold underline decoration-fuchsia-800 underline-offset-[6px] sm:text-4xl">
            CONNECTIONS
          </span>
          <div className="grid grid-cols-4 gap-4 p-4 justify-center">
            {gameWords.map((w) => (
              <Card key={w.id} word={w} handleClick={handleClick} />
            ))}
          </div>
          <div className="flex flex-row items-center gap-2">
            Mistakes remaining:
            {lives.map((l) => (
              <div
                key={l}
                className="w-4 h-4 rounded-full bg-fuchsia-800"
              ></div>
            ))}
          </div>
          <button
            className="border-2 border-fuchsia-800 border-solid w-24 rounded-md text-center hover:bg-gray-300"
            onClick={() => {
              setSelectedWords([]);
              setGameWords((prevWords) =>
                prevWords.map((w) => ({ ...w, selected: false }))
              );
            }}
          >
            CLEAR
          </button>
        </div>
      )}

      {(won || lost) && (
        <div className="flex flex-col gap-8">
          <span className="text-3xl font-semibold text-center text-fuchsia-800 animate-bounce">
            {won ? "CONGRATULATIONS!" : "BOO! YOU LOST!"}
          </span>
          <div className="flex flex-col gap-4 justify-center items-center">
            {wordsAndCategories.map((c) => (
              <div
                className={`${c.color} rounded-md h-20 w-5/6 p-4 text-center align-middle font-semibold text-gray-800`}
                key={c.number}
              >
                <span className="block font-bold">{c.text}</span>
                <span className="block text-[12px]">{c.words.join(", ")}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
