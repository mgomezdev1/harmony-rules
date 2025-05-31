import { FormControlLabel, Stack, Switch, Typography } from "@mui/material";
import { DynamicPlayInfo, getDefinitionId, Section, Subsection, Term } from "../text";
import { PropsOf } from "@emotion/react";
import { getNOfAKind, getScale, randomizeSuits, SuitMode } from "../cards/generators";
import { useState } from "react";
import { Rank } from "../cards/types";

function Chord(props: Omit<PropsOf<typeof DynamicPlayInfo>, 'category'>) {
  return <DynamicPlayInfo category="chord" {...props} />;
}

export function Chords() {
  const [harmonic, setHarmonic] = useState(false);

  const suitMode = harmonic ? SuitMode.Same : SuitMode.NonIdentical;

  return (
    <Section title="Chords" id={getDefinitionId('section', 'chords')}>
      <Typography variant="body1">
        Chords are plays involving more than one card, there are a variety of Chords in Harmony. 
        When playing a chord, determine which is the base card and which is the apex card. 
        The base card must be playable on top of the arena card. 
        The apex card is played last and will thus end up at the top of the arena after the chord is played.
      </Typography>

      <Chord term="pair" playName="Pair" generator={() => getNOfAKind(2)}>
        Play two cards of the same rank. 
        If any of the cards is a power card, its effect applies only once unless it can stack 
        (such as 2s, 3s, or 4s; a pair of red 4s can block a pair of black 4s. 
        Red 4s played in groups cancel out black 4s played in the same group).
      </Chord>

      <Chord term="three-of-a-kind" playName="Three of a Kind" generator={() => getNOfAKind(3)}>
        Play three cards of the same rank. Same rules apply as pairs.
      </Chord>

      <Chord term="harmony" playName="Harmony" generator={() => getNOfAKind(4)} victoryType="harmonic">
        Play four cards of the same rank and win the game. 
        This results in a <Term category="victory" term="harmonic">Harmonic Victory</Term>.
      </Chord>

      <Chord term="scale" playName="Scale" generator={() => getScale()}>
        <Stack gap={1}>
          <Typography variant="body1">
            Play 2 to 5 cards of the same suit whose ranks are adjacent. 
            The chain must progress from the Base card's rank to the Apex card's rank. 
            If the Apex card is a power card, its effect applies.
          </Typography>
          <Typography variant="body1">
            Kings and Aces are not adjacent to one another. Aces are only adjacent to Twos and Kings are only adjacent to Queens.
          </Typography>
          <Typography variant="body1">
            If a Scale would also be a <Term category="chords" term='court'>Harmonic Court Chord</Term>, such as a Jack-Queen scale, it must be played as a court chord instead.
          </Typography>
        </Stack>
      </Chord>

      <Subsection title="Court Chords" id={getDefinitionId('chords', 'court')}>
        <Typography variant="body1">
          Court chords involve face cards. The cards need not be played in any specific order, but they must still follow Chord Rules.
          Their effects are amplified if all used cards are of the same suit; in which case they are called Harmonic.
        </Typography>
        <Stack direction="row" alignSelf="stretch" justifyContent="center" alignItems="center" gap={2}>
          <FormControlLabel 
            control={<Switch value={harmonic} onChange={(e) => setHarmonic(e.target.checked)} />}
            label="Is Harmonic?"
          />
        </Stack>

        <Chord term="oracle" playName="Oracle" generator={() => randomizeSuits([Rank.Jack, Rank.Queen], suitMode)}>
          <Stack gap={1}>
            <Typography variant="body1">
              Draw 2 cards. Then discard 2 cards face down into a discard pile.
            </Typography>
            <Typography variant="body1">
              If harmonic, draw and discard 5 cards instead.
            </Typography>
          </Stack>
        </Chord>

        <Chord term="viceroy" playName="Viceroy" generator={() => randomizeSuits([Rank.Jack, Rank.King], suitMode)}>
          <Stack gap={1}>
            <Typography variant="body1">
              Pick any other player, swap your hand with theirs.
            </Typography>
            <Typography variant="body1">
              If harmonic, you may hold onto any number of cards, swap the remainder, then give the target player a number of cards from your hand up to the number of cards you kept.
            </Typography>
          </Stack>
        </Chord>

        <Chord term="monarch" playName="Monarch" generator={() => randomizeSuits([Rank.Queen, Rank.King], suitMode)}>
          <Stack gap={1}>
            <Typography variant="body1">
              Discard the arena. Then play a card face-up to start the new arena.
            </Typography>
            <Typography variant="body1">
              If harmonic, you may discard any number of cards from your hand of the same suit as the monarch. 
              If you discard all your remaining cards, you win with a <Term category="victory" term="royal">Royal Victory</Term>.
            </Typography>
          </Stack>
        </Chord>

        <Chord term="royal" playName="Royal Court" generator={() => randomizeSuits([Rank.Jack, Rank.Queen, Rank.King], suitMode)} victoryType={harmonic ? 'court' : ''}>
          <Stack gap={1}>
            <Typography variant="body1">
              Choose another Court Chord and trigger its Harmonic effect.
            </Typography>
            <Typography variant="body1">
              If harmonic, win the game with a <Term category="victory" term="court">Court Victory</Term>.
            </Typography>
          </Stack>
        </Chord>
      </Subsection>
    </Section>
  );
}