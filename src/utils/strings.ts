export function capitalize(term: string): string {
  return term.replace(/\b\w/g, char => char.toUpperCase());
}

export function humanizeKebabCase(term: string): string {
  return capitalize(term.replace("-", " "));
}
