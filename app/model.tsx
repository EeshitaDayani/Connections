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
    text: "POOL",
    category: 1,
    selected: false,
    matched: false,
    color: "bg-yellow-400",
  },
  {
    id: 2,
    text: "LIBRARY",
    category: 1,
    selected: false,
    matched: false,
    color: "bg-yellow-400",
  },
  {
    id: 3,
    text: "STORAGE",
    category: 1,
    selected: false,
    matched: false,
    color: "bg-yellow-400",
  },
  {
    id: 4,
    text: "PUZZLE",
    category: 1,
    selected: false,
    matched: false,
    color: "bg-yellow-400",
  },
  {
    id: 5,
    text: "DAN",
    category: 2,
    selected: false,
    matched: false,
    color: "bg-lime-500",
  },
  {
    id: 6,
    text: "CHETAN",
    category: 2,
    selected: false,
    matched: false,
    color: "bg-lime-500",
  },
  {
    id: 7,
    text: "JOHN",
    category: 2,
    selected: false,
    matched: false,
    color: "bg-lime-500",
  },
  {
    id: 8,
    text: "LEE",
    category: 2,
    selected: false,
    matched: false,
    color: "bg-lime-500",
  },
  {
    id: 13,
    text: "LEMON",
    category: 3,
    selected: false,
    matched: false,
    color: "bg-sky-400",
  },
  {
    id: 14,
    text: "ALOE",
    category: 3,
    selected: false,
    matched: false,
    color: "bg-sky-400",
  },
  {
    id: 15,
    text: "HERBS",
    category: 3,
    selected: false,
    matched: false,
    color: "bg-sky-400",
  },
  {
    id: 16,
    text: "FLOWERS",
    category: 3,
    selected: false,
    matched: false,
    color: "bg-sky-400",
  },
  {
    id: 9,
    text: "SAKE",
    category: 4,
    selected: false,
    matched: false,
    color: "bg-violet-400",
  },
  {
    id: 10,
    text: "DEHUMIDIFIER",
    category: 4,
    selected: false,
    matched: false,
    color: "bg-violet-400",
  },
  {
    id: 11,
    text: "SAREE",
    category: 4,
    selected: false,
    matched: false,
    color: "bg-violet-400",
  },
  {
    id: 12,
    text: "JASMINE",
    category: 4,
    selected: false,
    matched: false,
    color: "bg-violet-400",
  },
];

export const categories: Category[] = [
  { text: "THINGS IN OUR BASEMENT", number: 1, color: "bg-yellow-400" },
  { text: "MOM'S FAV NOVELLISTS", number: 2, color: "bg-green-500" },
  { text: "THINGS IN OUR GARDEN", number: 3, color: "bg-sky-400" },
  {
    text: "PREFIXES OF PLACES YOU HAVE PROPERTY",
    number: 4,
    color: "bg-violet-500 bg-opacity-75",
  },
];

export let wordsAndCategories: WordsAndCategory[] = [];
export let longestWordLength: number = Math.max(...words.map((w) => w.text.length)) * 11

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
