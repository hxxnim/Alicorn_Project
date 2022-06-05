export const messageLengthLimit = (text: string) => {
  const MAX_LENGTH = 22;

  if (text.length > MAX_LENGTH) {
    return text.substring(0, MAX_LENGTH) + "...";
  }
  return text;
};
