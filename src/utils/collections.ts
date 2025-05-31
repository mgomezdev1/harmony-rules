export function shuffleFirst<T>(array: T[], swaps: number) {
  const last = Math.min(array.length - 1, swaps);  
  for (let i = 0; i < last; i++) {
    const j = i + Math.floor(Math.random() * (array.length - i));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function shuffle<T>(array: T[]) {
  return shuffleFirst(array, array.length);
}

export function choose<T>(options: T[], count: number, randomOrder = true) {
  if (count > options.length) {
    throw new Error("Count cannot be greater than the number of options.");
  }

  const shuffled = shuffleFirst([...options], count);
  const result = shuffled.slice(0, count);

  if (randomOrder) return result;
  
  const selected = new Set(result);
  return options.filter(o => selected.has(o));
}

export function pick<T>(options: T[], stopIndex: number | undefined = undefined) {
  const index = pickIndex(stopIndex ?? options.length);
  return options[index];
}

export function pickIndex(length: number) {
  return Math.floor(Math.random() * length);
}

export function pickMany<T>(options: T[], count: number, randomOrder = true) {
  const choices = new Array(count).fill(null).map(() => pick(options));

  if (randomOrder) return choices;

  const optionOrder = new Map(options.map((option, index) => [option, index]));
  return choices.sort((a, b) => (optionOrder.get(a) ?? 0) - (optionOrder.get(b) ?? 0));
}

export function allEqual<T>(values: T[]) {
  const value = values[0];
  return values.every(k => k === value);
}
