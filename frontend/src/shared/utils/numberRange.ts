export const validateNumberRange = (min: number, max: number) => (value: string): boolean => {
    const number = parseInt(value, 10);
    return !isNaN(number) && number >= min && number <= max;
  };
  