import { Typography } from "@mui/material";
import { getDefinitionId, Section, Term } from "../text";

export function BaseRules() {
  return (
    <Section title="Game Rules" id={getDefinitionId('section', 'rules')}>
      <Typography variant="body1">Harmony is a 2+ player card game that uses a standard deck with 1 joker.</Typography>
      <Typography variant="body1">
        Play begins by dealing 7 cards to each player, 
        then placing a face-up card in the center of the game board;
        this central pile is the arena, 
        which is where cards are played to during the game. Place all remaining cards in a draw pile beside the arena.
        The player to the left of the dealer starts and turns progress clockwise.
      </Typography>
      <Typography variant="body1">
        On each turn, a player may play cards to the arena or draw one card and end their turn.
        Plays are generally of a single card matching the suit or rank of the top card in the arena.
        For example, given a 5 of clubs on the arena, one could play a king of clubs or a 5 of diamonds, but not a king of diamonds.
        Certain cards have special effects, these are called <Term category="section" term="power">Power Cards</Term>.
        Beyond general card plays, one can also play <Term category="section" term="chords">Chords</Term>, 
        special plays involving multiple cards.
      </Typography>
      <Typography variant="body1">
        There are many ways to win in Harmony, but the main goal of the game is to play your whole hand. 
        Doing so results in a <Term category="victory" term="common">Common Victory</Term> 
      </Typography>
    </Section>
  );
}