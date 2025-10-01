import { Stack, Typography } from "@mui/material";
import { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{ title: string; id?: string }>;

export function Section({ title, id, children }: SectionProps) {
  return (
    <Stack gap={2} mt={2} id={id}>
      <Typography variant="h2">{title}</Typography>
      <Stack gap={1}>{children}</Stack>
    </Stack>
  );
}

export function Subsection({ title, id, children }: SectionProps) {
  return (
    <Stack gap={1} mt={1} mb={2} id={id}>
      <Typography variant="h4">{title}</Typography>
      <Stack gap={1} pl={1} borderLeft={1} borderColor="divider">
        {children}
      </Stack>
    </Stack>
  );
}

export function Subsubsection({ title, id, children }: SectionProps) {
  return (
    <Stack gap={1} mt={1} id={id}>
      <Typography variant="h5">{title}</Typography>
      <Stack gap={1} pl={1}>
        {children}
      </Stack>
    </Stack>
  );
}

export function Item({
  name,
  description,
  children,
}: PropsWithChildren<{ name: string; description: string }>) {
  return (
    <Typography component="li" variant="body2">
      <Typography component="span" fontWeight={700}>
        {name}:{" "}
      </Typography>
      <Typography component="span">{description}</Typography>
      {children && (
        <Stack ml={2} gap={1}>
          {children}
        </Stack>
      )}
    </Typography>
  );
}
