"use client";

export interface Word {
  id: number;
  text: String;
  category: number;
  selected: Boolean;
  matched: Boolean;
  color: String;
}

export interface Category {
  text: String;
  number: number;
  color: String;
}

export interface WordsAndCategory {
  text: String;
  words: String[];
  number: number;
  color: String;
}

export const shuffle = (array: Word[]) => {
  return array.sort(() => Math.random() - 0.5);
};

export const words: Word[] = [
  {
    id: 1,
    text: "PHONE",
    category: 1,
    selected: false,
    matched: false,
    color: "bg-yellow-400",
  },
  {
    id: 2,
    text: "EARRINGS",
    category: 1,
    selected: false,
    matched: false,
    color: "bg-yellow-400",
  },
  {
    id: 3,
    text: "PERFUME",
    category: 1,
    selected: false,
    matched: false,
    color: "bg-yellow-400",
  },
  {
    id: 4,
    text: "NECKLACE",
    category: 1,
    selected: false,
    matched: false,
    color: "bg-yellow-400",
  },
  {
    id: 5,
    text: "ANIMAL",
    category: 2,
    selected: false,
    matched: false,
    color: "bg-lime-500",
  },
  {
    id: 6,
    text: "WAR",
    category: 2,
    selected: false,
    matched: false,
    color: "bg-lime-500",
  },
  {
    id: 7,
    text: "WELCOME",
    category: 2,
    selected: false,
    matched: false,
    color: "bg-lime-500",
  },
  {
    id: 8,
    text: "DUNKI",
    category: 2,
    selected: false,
    matched: false,
    color: "bg-lime-500",
  },
  {
    id: 13,
    text: "JIGSAW",
    category: 3,
    selected: false,
    matched: false,
    color: "bg-sky-400",
  },
  {
    id: 14,
    text: "WALKING",
    category: 3,
    selected: false,
    matched: false,
    color: "bg-sky-400",
  },
  {
    id: 15,
    text: "DANCING",
    category: 3,
    selected: false,
    matched: false,
    color: "bg-sky-400",
  },
  {
    id: 16,
    text: "STOCKS",
    category: 3,
    selected: false,
    matched: false,
    color: "bg-sky-400",
  },
  {
    id: 9,
    text: "EXHIBITION",
    category: 4,
    selected: false,
    matched: false,
    color: "bg-violet-400",
  },
  {
    id: 10,
    text: "SITE",
    category: 4,
    selected: false,
    matched: false,
    color: "bg-violet-400",
  },
  {
    id: 11,
    text: "INTERIOR",
    category: 4,
    selected: false,
    matched: false,
    color: "bg-violet-400",
  },
  {
    id: 12,
    text: "STUDIO",
    category: 4,
    selected: false,
    matched: false,
    color: "bg-violet-400",
  },
];

export const categories: Category[] = [
  { text: "GIFTS YOU BOUGHT", number: 1, color: "bg-yellow-400" },
  { text: "MOVIES WE'VE SEEN", number: 2, color: "bg-green-500" },
  { text: "MOM'S INTERESTS", number: 3, color: "bg-sky-400" },
  {
    text: "DAD'S WORK PROJECTS",
    number: 4,
    color: "bg-violet-500 bg-opacity-75",
  },
];

export let wordsAndCategories: WordsAndCategory[] = [];

categories.forEach((c) => {
  const catWords = words.filter((w) => w.category == c.number);
  let wordList: String[] = [];
  catWords.forEach((cw) => {
    wordList.push(cw.text);
  });

  wordsAndCategories.push({
    text: c.text,
    words: wordList,
    number: c.number,
    color: c.color,
  });
});
