export const isValidValue = (value: string): boolean => {
  if (value.trim().length > 0) {
    const specialCharsRegex = /[!@№#$%^&*=[\]{};:`"<>,.?~\\|/]/;
    return !specialCharsRegex.test(value);
  }

  return true;
};
