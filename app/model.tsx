interface Word {
  text: String;
  category: number;
}

const shuffle = (array: Word[]) => {
  return array.sort(() => Math.random() - 0.5);
};

const words: Word[] = [
  { text: "FLOWERS", category: 1 },
  { text: "POLISH", category: 1 },
  { text: "CROCHET", category: 1 },
  { text: "LIGHTS", category: 1 },
  { text: "MISSING", category: 2 },
  { text: "CREW", category: 2 },
  { text: "TINKER", category: 2 },
  { text: "FIGHTER", category: 2 },
  { text: "CARRIE", category: 4 },
  { text: "PRONTO", category: 4 },
  { text: "HILTON", category: 4 },
  { text: "ANGARA", category: 4 },
  { text: "GLASSES", category: 3 },
  { text: "STRING", category: 3 },
  { text: "JEANS", category: 3 },
  { text: "MALA", category: 3 },
];

export const randomWords: Word[] = shuffle(words);
