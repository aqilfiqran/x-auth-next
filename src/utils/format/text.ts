export function getInitials(name: string): string {
  if (!name) return '';

  // Split the name into words
  const words = name.trim().split(' ');

  // Get the first letter of the first word and the first letter of the last word
  const initials = words.map(word => word[0].toUpperCase()).join('');

  return initials;
}

// change whitespace to whitespace with nbsp
export function nbsp(text: string): string {
  return text.replace(/\s/g, '\u00A0');
}

export const isInRange = (min: number, max: number, value: number) => {
  return value >= min && value <= max;
};
