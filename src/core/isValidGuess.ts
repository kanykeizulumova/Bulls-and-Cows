import { createDigitValidator } from "./createDigitValidator.js";

export const isValidGuess = (
    guess: string,
    length: number,
    base: number
): boolean => {
    const normalized = guess.toLowerCase();
    if (normalized.length !== length) return false;

    const isDigitValid = createDigitValidator(base);
    const chars = normalized.split('');

    const allValid = chars.every(isDigitValid);
    const uniqueCount = new Set(chars).size;

    return allValid && uniqueCount === length;
};