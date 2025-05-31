import { allEqual, choose, pick, pickIndex, pickMany } from "../utils/collections";
import { Rank } from "./types";
import { RANKS, SUITS } from "./utils";

export function getNOfAKind(n: number) {
  const suits = choose(SUITS, n);
  const rank = pick(RANKS);

  return suits.map((suit) => `${rank}${suit}`)
}

const MAX_SCALE_LENGTH = 5;
function getRandomScaleLength() {
  let length = 2;
  while (length < MAX_SCALE_LENGTH && Math.random() < 0.66) {
    length++;
  }
  return length;
}

export function getScale() {
  const scaleLength = getRandomScaleLength();
  return getScaleWithLength(scaleLength);
}

export function getScaleWithLength(n: number) {
  // lowest value of a scale cannot be JQK (court chord) 
  const startCard = pickIndex(Math.min(RANKS.length - n + 1, 10)); 
  const suit = pick(SUITS);

  const scale = new Array(n).fill('').map((_, i) => `${RANKS[i + startCard]}${suit}`);
  
  // 50% chance to flip it
  if (Math.random() < 0.5) scale.reverse();

  return scale;
}

export enum SuitMode {
  Same,
  Distinct,
  NonIdentical,
  Any,
}

export function pickSuits(length: number, suitMode = SuitMode.Any, randomOrder = true) {
  switch(suitMode) {
    case SuitMode.Same:
      return new Array(length).fill(pick(SUITS)); 
    case SuitMode.Distinct:
      return choose(SUITS, length, randomOrder);
    case SuitMode.NonIdentical: {
      const initValue = pickMany(SUITS, length, randomOrder);
      if (allEqual(initValue)) {
        const idx = pickIndex(length);
        const existing = initValue[idx];
        initValue[idx] = pick(SUITS.filter(suit => suit !== existing));
      }
      return initValue;
    }
    case SuitMode.Any:
      return pickMany(SUITS, length, randomOrder);
  }
}

export function randomizeSuits(ranks: Rank[], suitMode = SuitMode.Any) {
  const suits = pickSuits(ranks.length, suitMode);
  return ranks.map((rank, index) => `${rank}${suits[index]}`);
}
