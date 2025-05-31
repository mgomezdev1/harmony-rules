import { Stack } from "@mui/material";
import { playFromString } from "./utils";
import Card from "./Card";
import MiniCard from "./MiniCard";

export default function Play({cards, Display = Card}: {cards: string, Display: typeof Card | typeof MiniCard }) {
  const values = playFromString(cards);

  return (
    <Stack direction="row" gap={4}>
      {
        values.map((v, i) => (
          <Display key={i} {...v} />
        ))
      }
    </Stack>
  )
}
