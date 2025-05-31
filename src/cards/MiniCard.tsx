import { Stack, Typography } from "@mui/material";
import { CardValue } from "./types"
import { LucideIcon } from "lucide-react";
import { colors } from "../theme";
import { getSuitColor, getSuitIcon, WildIcon } from "./utils";
import { CARD_RATIO } from "./constants";

export type CardProps = CardValue & {}

export default function MiniCard({suit, rank, isWild}: CardProps) {
  if (isWild) {
    return <InternalCard color="#555555" Icon={WildIcon} text="W" />
  }

  const Icon = getSuitIcon(suit);
  const color = getSuitColor(suit);
  const text = rank.toString();

  return <InternalCard color={color} text={text} Icon={Icon} />
}

type InternalProps = {
  color: string;
  text?: string;
  Icon?: LucideIcon;
};

function InternalCard({text, color, Icon}: InternalProps) {
  return (
    <Stack 
      height={36} 
      width={36 * CARD_RATIO} 
      borderRadius={1} 
      pb={0.3}
      color={color} 
      bgcolor={colors.background.card}
    >
      <Stack  
        flexGrow={1} 
        alignItems="center" 
        justifyContent="center"
      >
        <Typography variant="caption" color="inherit" fontWeight={800}>{text}</Typography>
        {Icon && <Icon size={12} fill={color} />}      
      </Stack>
    </Stack>
  );
}
