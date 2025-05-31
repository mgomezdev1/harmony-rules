import { ClubIcon, CrownIcon, DiamondIcon, HeartIcon, LucideIcon, SpadeIcon } from "lucide-react";
import { CardValue, Rank, Suit } from "./types";

export function cardFromString(raw: string): CardValue | undefined {
  if (raw === 'W') return { rank: Rank.Ace, suit: Suit.Spades, isWild: true };

  const suitStr = raw.substring(raw.length - 1);
  const rankStr = raw.substring(0, raw.length - 1);

  const suit = SUIT_STRING[suitStr];
  const rank = RANK_STRING[rankStr];

  if (!suit || !rank) return undefined;

  return { rank, suit, isWild: false };
}

export function playFromString(raw: string): CardValue[] {
  const sequence = raw.split(' ');

  return sequence.map((c) => cardFromString(c)).filter(Boolean) as CardValue[];
}

export const SUIT_STRING: Record<string, Suit> = {
  "S": Suit.Spades,
  "D": Suit.Diamonds,
  "H": Suit.Hearts,
  "C": Suit.Clubs,
};
export const SUITS = Object.values(SUIT_STRING);

export const RANK_STRING: Record<string, Rank> = {
  "A": Rank.Ace,
  "2": Rank.Two,
  "3": Rank.Three,
  "4": Rank.Four,
  "5": Rank.Five,
  "6": Rank.Six,
  "7": Rank.Seven,
  "8": Rank.Eight,
  "9": Rank.Nine,
  "10": Rank.Ten,
  "T": Rank.Ten,
  "J": Rank.Jack,
  "Q": Rank.Queen,
  "K": Rank.King,
};

export const RANKS = [  
  Rank.Ace,
  Rank.Two,
  Rank.Three,
  Rank.Four,
  Rank.Five,
  Rank.Six,
  Rank.Seven,
  Rank.Eight,
  Rank.Nine,
  Rank.Ten,
  Rank.Jack,
  Rank.Queen,
  Rank.King,
];

export function getSuitIcon(suit: Suit): LucideIcon | undefined {
  switch (suit) {
    case Suit.Clubs:
      return ClubIcon;
    case Suit.Diamonds:
      return DiamondIcon;
    case Suit.Hearts:
      return HeartIcon;
    case Suit.Spades:
      return SpadeIcon;
    default:
      return undefined;
  }
}

export function getSuitColor(suit: Suit) {
  switch (suit) {
    case Suit.Clubs:
    case Suit.Spades:
      return "#555555";
    case Suit.Diamonds:
    case Suit.Hearts:
      return "#dd0a0a";
    default:
      return "11ff11";
  }
}

export const WildIcon = CrownIcon; 
