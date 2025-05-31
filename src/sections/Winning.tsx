import { Typography } from "@mui/material";
import { Definition, Section } from "../text";

export function Winning() {
  return (
    <Section title="Winning the Game">
      <Typography variant="body1">
        There are quite a few ways to win in Harmony. 
        The following is a list of winning conditions along with their canonical names.
      </Typography>
      <Definition 
        category="victory" 
        term="common" 
        name="Common Victory"
        definition="A victory achieved by playing the last card in your hand to the arena in normal play." 
      />
      <Definition 
        category="victory" 
        term="harmonic"
        name="Harmonic Victory"
        definition="A victory achieved by playing a Harmony (four of a kind chord) onto the arena" 
      />
      <Definition 
        category="victory" 
        term="court" 
        name="Court Victory"
        definition="A victory achieved by playing a Harmonic Royal Court (J, Q, K of the same suit) onto the arena" 
      />
      <Definition 
        category="victory" 
        term="royal" 
        name="Royal Victory"
        definition="A victory achieved by discarding your remaining hand off of a Harmonic Monarch chord (Q and K of the same suit)" 
      />
    </Section>
  );
}