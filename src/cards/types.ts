export enum Suit {
  Spades = "S",
  Diamonds = "D",
  Hearts = "H",
  Clubs = "C",  
}

export enum Rank {
  Ace = "A",
  Two = "2",
  Three = "3",
  Four = "4",
  Five = "5",
  Six = "6",
  Seven = "7",
  Eight = "8",
  Nine = "9",
  Ten = "10",
  Jack = "J",
  Queen = "Q",
  King = "K",
}

export type CardValue = {
  rank: Rank,
  suit: Suit,
  isWild?: boolean,
}
