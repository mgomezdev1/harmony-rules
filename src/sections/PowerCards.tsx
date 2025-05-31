import { Typography } from "@mui/material";
import { getDefinitionId, PlayInfo, Section, Term } from "../text";
import { PropsOf } from "@emotion/react";

function PowerCard(props: Omit<PropsOf<typeof PlayInfo>, 'category'>) {
  return <PlayInfo category="power" {...props} />;
}

export function PowerCards() {
  return (
    <Section title="Power Cards" id={getDefinitionId('section', 'power')}>
      <Typography variant="body1">
        Power cards have special effects that slightly alter the general rules of the game.
      </Typography>
      <PowerCard term="ace" playName="Wild Ace" playCards="AS AD AH AC">
        The ace is a wild suit card, it can be played on any suit.
      </PowerCard>
      <PowerCard term="two" playName="Draw 2" playCards="2S 2D 2H 2C">
        Draw 2. The next player must draw 2 cards and end their turn. 
        Alternatively, they can play another 2 to stack it and force the next player to draw 2+2=4. 
        Stacking may continue indefinitely.
      </PowerCard>
      <PowerCard term="three" playName="Draw 3" playCards="3S 3D 3H 3C">
        Draw 3. Same rules apply. A 3 may not be stacked on top of a 2, or vice versa.
      </PowerCard>
      <PowerCard term="black-four" playName="Draw 4" playCards="4S 4C">
        Draw 4. Similar rules to draw 2 or draw 3, with a special blocking behaviour using red 4s.
      </PowerCard>
      <PowerCard term="red-four" playName="Block Draw 4" playCards="4D 4H">
        Block Draw 4. This reduces the draw count of a Draw 4 play by 4. 
        If two <Term category="power" term="black-four">black 4s</Term> were played, you may play a Red 4 pair to avoid drawing any cards.
        You must draw cards equal to the remaining draw count at the end of your turn if it remains above 0.
      </PowerCard>
      <PowerCard term="eight" playName="Pick Suit" playCards="8S 8D 8H 8C">
        Pick a suit. The next card played to the Arena must be of that suit, unless it is an <Term category="power" term="ace">Ace</Term> or another 8.
      </PowerCard>
      <PowerCard term="nine" playName="Reverse" playCards="9S 9D 9H 9C">
        The direction of play is reversed.
      </PowerCard>
      <PowerCard term="ten" playName="Skip" playCards="TS TD TH TC">
        Pick any player (including yourself). After you play, it becomes their turn.
      </PowerCard>
      <PowerCard term="wild" playName="Wildcard" playCards="W">
        The joker (called wild) can assume the role of any other card. When played, the player must declare what the wild represents in the play.
        A wild may be used as part of a chord.
      </PowerCard>
    </Section>
  );
}