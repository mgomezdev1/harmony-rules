import { Stack, Typography } from "@mui/material";
import { CardValue } from "./types"
import { LucideIcon } from "lucide-react";
import { colors } from "../theme";
import { getSuitColor, getSuitIcon, WildIcon } from "./utils";
import { CARD_RATIO } from "./constants";

export type CardProps = CardValue & {}

export default function Card({suit, rank, isWild}: CardProps) {
  if (isWild) {
    return <InternalCard color="555555" Icon={WildIcon} text="W" />
  }

  const Icon = getSuitIcon(suit);
  const color = getSuitColor(suit);
  const text = rank.toString();

  return <InternalCard color={color} text={text} Icon={Icon} image="" />
}

type InternalProps = {
  color: string;
  image?: string;
  text?: string;
  Icon?: LucideIcon;
};

function InternalCard({image, text, color, Icon}: InternalProps) {
  return (
    <Stack height={92} width={92 * CARD_RATIO} p={2} borderRadius={2} color={color} bgcolor={colors.background.card}>
      <Stack 
        direction="row" 
        flexGrow={1}
        gap={1} 
        alignItems="center" 
        justifyContent="center" 
        sx={image ? {backgroundImage: image} : {}}
      >
        <Typography variant="h3" color="inherit">{text}</Typography>
        {Icon && <Icon size={32} />}
      </Stack>
    </Stack>
  );
}
