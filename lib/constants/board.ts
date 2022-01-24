import { Card } from "@components";

let emojis = ["🍅", "🍊", "🍋", "🍎", "🍏", "🍑", "🍓", "🥭"];

let values = [
  "tomato",
  "orange",
  "lemon",
  "rapple",
  "gapple",
  "peach",
  "strawberry",
  "mango",
];

export const createBoard = () => {
  let board = [];

  for (let index = 0; index < 16; index++) {
    board.push({
      id: `${values[index % 8]}-${index}`,
      active: false,
      emoji: emojis[index % 8],
      sort: Math.random(),
      value: values[index % 8],
    } as Card);
  }

  return board
    .sort((a, b) => a.sort - b.sort)
    .map((card, index) => ({ ...card, index }));
};
