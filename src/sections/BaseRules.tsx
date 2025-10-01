import { Typography } from "@mui/material";
import { getDefinitionId, Section, Subsection, Term } from "../text";

export function BaseRules() {
  return (
    <Section title="Game Rules" id={getDefinitionId("section", "rules")}>
      <Typography variant="body1">
        Harmony is a 2+ player card game that uses a standard deck with 1 joker.
      </Typography>
      <Typography variant="body1">
        Play begins by dealing 7 cards to each player, then placing a face-up
        card in the center of the game board; this central pile is the arena,
        which is where cards are played to during the game. Place all remaining
        cards in a draw pile beside the arena. The player to the left of the
        dealer starts and turns progress clockwise.
      </Typography>
      <Typography variant="body1">
        On each turn, a player may play cards to the arena or draw one card and
        end their turn. Plays are generally of a single card matching the suit
        or rank of the top card in the arena. For example, given a 5 of clubs on
        the arena, one could play a king of clubs or a 5 of diamonds, but not a
        king of diamonds. Certain cards have special effects, these are called{" "}
        <Term category="section" term="power">
          Power Cards
        </Term>
        . Beyond general card plays, one can also play{" "}
        <Term category="section" term="chords">
          Chords
        </Term>
        , special plays involving multiple cards.
      </Typography>
      <Typography variant="body1">
        There are many ways to win in Harmony, but the main goal of the game is
        to play your whole hand. Doing so results in a{" "}
        <Term category="victory" term="common">
          Common Victory
        </Term>
      </Typography>
      <Subsection title="Card Piles" id={getDefinitionId("section", "piles")}>
        <Typography variant="body1">
          The draw pile is the stack of face-down cards beside the arena. When a
          player draws a card, they take the top card from this pile. On the
          opposite side of the arena is the discard pile. Whenever a play allows
          a player to discard cards, they must place them face-down on top of
          this pile. If the draw pile is ever empty and a player needs to draw a
          card; remove the top card from the arena and set it down face-up. It
          becomes the new arena. The rest of the old arena and the discard pile
          are then combined and shuffled. This becomes the new draw pile. If it
          is impossible to do this, the game ends in a draw.
        </Typography>
      </Subsection>
    </Section>
  );
}
