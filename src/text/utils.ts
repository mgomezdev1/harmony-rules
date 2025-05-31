export function getDefinitionId(category: string, term: string) {
  return `${category}-${term}`;
}
export function getDefinitionHref(category: string, term: string) {
  return `#${getDefinitionId(category, term)}`;
}
