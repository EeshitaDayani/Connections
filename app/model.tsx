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

export const shuffle = (array: Word[]) => {
  return array.sort(() => Math.random() - 0.5);
};

export const words: Word[] = [
  { id: 1, text: "FLOWERS", category: 1, selected: false, matched: false, color: "bg-yellow-400" },
  { id: 2, text: "POLISH", category: 1, selected: false, matched: false, color: "bg-yellow-400" },
  { id: 3, text: "CROCHET", category: 1, selected: false, matched: false, color: "bg-yellow-400" },
  { id: 4, text: "LIGHTS", category: 1, selected: false, matched: false, color: "bg-yellow-400" },
  { id: 5, text: "MISSING", category: 2, selected: false, matched: false, color: "bg-lime-500" },
  { id: 6, text: "CREW", category: 2, selected: false, matched: false, color: "bg-lime-500" },
  { id: 7, text: "TINKER", category: 2, selected: false, matched: false, color: "bg-lime-500" },
  { id: 8, text: "FIGHTER", category: 2, selected: false, matched: false, color: "bg-lime-500" },
  { id: 9, text: "CARRIE", category: 4, selected: false, matched: false, color: "bg-violet-400" },
  { id: 10, text: "PRONTO", category: 4, selected: false, matched: false, color: "bg-violet-400" },
  { id: 11, text: "HILTON", category: 4, selected: false, matched: false, color: "bg-violet-400" },
  { id: 12, text: "ANGARA", category: 4, selected: false, matched: false, color: "bg-violet-400" },
  { id: 13, text: "GLASSES", category: 3, selected: false, matched: false, color: "bg-sky-400" },
  { id: 14, text: "STRING", category: 3, selected: false, matched: false, color: "bg-sky-400" },
  { id: 15, text: "JEANS", category: 3, selected: false, matched: false, color: "bg-sky-400" },
  { id: 16, text: "MALA", category: 3, selected: false, matched: false, color: "bg-sky-400" },
];

export const categories: Category[] = [
  { text: "Gifts you've bought me", number: 1, color: "bg-yellow-400" },
  { text: "Movies we've watched", number: 2, color: "bg-green-500" },
  { text: "Things that you always wear", number: 3, color: "bg-sky-400" },
  { text: "Cities we've been to together", number: 4, color: "bg-violet-500" },
];
