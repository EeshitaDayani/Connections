"use client";

export interface Word {
  id: number;
  text: String;
  category: number;
  selected: Boolean;
  matched: Boolean;
}

interface Category {
  text: String;
  number: number;
}

export const shuffle = (array: Word[]) => {
  return array.sort(() => Math.random() - 0.5);
};

export const words: Word[] = [
  { id: 1, text: "FLOWERS", category: 1, selected: false, matched: false },
  { id: 2, text: "POLISH", category: 1, selected: false, matched: false },
  { id: 3, text: "CROCHET", category: 1, selected: false, matched: false },
  { id: 4, text: "LIGHTS", category: 1, selected: false, matched: false },
  { id: 5, text: "MISSING", category: 2, selected: false, matched: false },
  { id: 6, text: "CREW", category: 2, selected: false, matched: false },
  { id: 7, text: "TINKER", category: 2, selected: false, matched: false },
  { id: 8, text: "FIGHTER", category: 2, selected: false, matched: false },
  { id: 9, text: "CARRIE", category: 4, selected: false, matched: false },
  { id: 10, text: "PRONTO", category: 4, selected: false, matched: false },
  { id: 11, text: "HILTON", category: 4, selected: false, matched: false },
  { id: 12, text: "ANGARA", category: 4, selected: false, matched: false },
  { id: 13, text: "GLASSES", category: 3, selected: false, matched: false },
  { id: 14, text: "STRING", category: 3, selected: false, matched: false },
  { id: 15, text: "JEANS", category: 3, selected: false, matched: false },
  { id: 16, text: "MALA", category: 3, selected: false, matched: false },
];

export const categories: Category[] = [
  { text: "Gifts you've bought me", number: 1 },
  { text: "Movies we've watched", number: 2 },
  { text: "Things that you always wear", number: 3 },
  { text: "Cities we've been to together", number: 4 },
];
