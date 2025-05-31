import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from "@mui/material";
import { PropsWithChildren, useEffect, useState } from "react";
import Play from "../cards/Play";
import MiniCard from "../cards/MiniCard";
import { colors } from "../theme";
import { getDefinitionId } from "./utils";
import { CrownIcon } from "lucide-react";
import { Term } from "./Glossary";

type Props = PropsWithChildren<{
  playCards: string;
  playName: string;
  term: string;
  category: string;
  victoryType?: string;
}>

export function PlayInfo({playCards, playName, category, term, victoryType, children}: Props) {
  return (
    <Accordion 
      id={getDefinitionId(category, term)}
      sx={{
        color: colors.text.default, 
        bgcolor: colors.background.paper
      }}
    >
      <AccordionSummary>
        <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
          <Stack direction="row" alignItems="center">
            <Typography variant="h5" minWidth={200}>{playName}</Typography>
            <Play Display={MiniCard} cards={playCards} />
          </Stack>
          <Stack direction="row" alignItems="center">
            {victoryType && <Term category="victory" term={victoryType}><CrownIcon size={24} /></Term>}
          </Stack>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        {children}
      </AccordionDetails>
    </Accordion>
  );
}

type Generator = () => string | string[];

type DynamicProps = Omit<Props, 'playCards'> & {
  generator: Generator;
  interval?: number;
}

function postProcess(value: string | string[]): string {
  if (Array.isArray(value)) return value.join(' ');
  return value;
}

export function DynamicPlayInfo({generator, interval=1000, ...props}: DynamicProps) {    
  const [cards, setCards] = useState(() => postProcess(generator()));
  
  useEffect(() => {
    setCards(postProcess(generator()));
    const key = setInterval(() => setCards(postProcess(generator())), interval);
    return () => clearInterval(key);
  }, [generator, interval])

  return <PlayInfo playCards={cards} {...props} />
}
