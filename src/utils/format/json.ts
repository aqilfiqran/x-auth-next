export const interpolateText = (text: string, variable: Record<string, string>) => {
  // replace [variable] with the value of the variable
  return Object.keys(variable).reduce((newText, key) => {
    return newText.replaceAll(`[${key}]`, variable[key]);
  }, text);
};
