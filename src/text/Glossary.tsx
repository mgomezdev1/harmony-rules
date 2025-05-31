import { Box, Link, Typography, TypographyProps } from "@mui/material";
import { PropsWithChildren } from "react";
import { Item } from "./sections";
import { getDefinitionHref, getDefinitionId } from "./utils";
import { humanizeKebabCase } from "../utils";

type TermProps = TypographyProps & {
  term: string;
  category: string;
}

export function Term({term, category, ...props}: TermProps) {
  return (
    <Link href={getDefinitionHref(category, term)}>
      <Typography component="span" variant="inherit" {...props} />
    </Link>
  )
}

export function GlossaryTerm(props: Omit<TermProps, 'category'>) {
  return <Term category="glossary" {...props} />;
}

type DefinitionProps = PropsWithChildren<{
  category: string;
  term: string;
  name?: string;
  definition: string;
}>;

export function Definition({category, term, definition, name, children}: DefinitionProps) {
  return (
    <Box id={getDefinitionId(category, term)}>
      <Item name={name ?? humanizeKebabCase(term)} description={definition}>{children}</Item>
    </Box>
  )
}

export function GlossaryDefinition(props: Omit<DefinitionProps, 'category'>) {
  return <Definition category="glossary" {...props} />
}
