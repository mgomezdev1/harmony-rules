import { Typography } from "@mui/material";
import { getDefinitionId, Section, Subsection, Term } from "../text";

export function OptionalRules() {
  return (
    <Section title="Optional Rules" id={getDefinitionId("section", "optional")}>
      <Typography variant="body1">
        Depending on the size of your group of your preferred playstyle, you may
        want to adjust the rules to better fit your game. The following is a
        list of optional rules you can choose to include or ignore.
      </Typography>
      <Subsection
        title="Conspicuous Wild"
        id={getDefinitionId("optional", "loud-wild")}
      >
        <Typography variant="body1">
          When a player draws a wild to their hand, they must reveal it
          immediately. This makes wilds riskier to hold onto for big plays such
          as{" "}
          <Term category="chord" term="harmony">
            Harmony
          </Term>{" "}
          or{" "}
          <Term category="chord" term="royal">
            Harmonic Royal Court
          </Term>
          .
        </Typography>
      </Subsection>

      <Subsection
        title="Forced Play"
        id={getDefinitionId("optional", "forced-play")}
      >
        <Typography variant="body1">
          Players may not draw to skip their turn if they have a playable card
          in their hand. They must play a card if they can. This prevents
          certain strategies such as card hoarding to force high-impact plays.
        </Typography>
      </Subsection>

      <Subsection
        title="Simple Skip"
        id={getDefinitionId("optional", "simple-skip")}
      >
        <Typography variant="body1">
          The{" "}
          <Term category="power" term="ten">
            Skip
          </Term>{" "}
          card is simplified. It simply skips the next player's turn.
        </Typography>
      </Subsection>

      <Subsection
        title="Sanctioned Court"
        id={getDefinitionId("optional", "court-sanction")}
      >
        <Typography variant="body1">
          <Term category="chords" term="court">
            Court Chords
          </Term>{" "}
          have no effect. This is a useful rule to introduce new players to
          Harmony without adding too many complex strategic elements
          immediately.
        </Typography>
      </Subsection>
    </Section>
  );
}
