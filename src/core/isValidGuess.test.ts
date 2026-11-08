import { describe, it, expect } from 'vitest';
import { isValidGuess } from './isValidGuess';

describe('isValidGuess', () => {
    it('should return true for valid unique digits in decimal base', () => {
        expect(isValidGuess('1234', 4, 10)).toBe(true);
    });

    it('should return true for valid guesses with leading zeroes', () => {
        expect(isValidGuess('0123', 4, 10)).toBe(true);
    });

    it('should return true for valid guesses in binary, octal, and hex', () => {
        expect(isValidGuess('10', 2, 2)).toBe(true);
        expect(isValidGuess('0752', 4, 8)).toBe(true);
        expect(isValidGuess('1aB9', 4, 16)).toBe(true);
    });

    it('should return false if guess length does not match expected length', () => {
        expect(isValidGuess('123', 4, 10)).toBe(false);
        expect(isValidGuess('12345', 4, 10)).toBe(false);
        expect(isValidGuess('', 4, 10)).toBe(false);
    });

    it('should return false if digits repeat', () => {
        expect(isValidGuess('1123', 4, 10)).toBe(false);
        expect(isValidGuess('1231', 4, 10)).toBe(false);
    });

    it('should return false if hex digits repeat in different cases', () => {
        expect(isValidGuess('1a2A', 4, 16)).toBe(false);
        expect(isValidGuess('F01f', 4, 16)).toBe(false);
    });

    it('should return false if any character is outside the valid base range', () => {
        expect(isValidGuess('102', 3, 2)).toBe(false);
        expect(isValidGuess('1289', 4, 8)).toBe(false);
        expect(isValidGuess('123g', 4, 16)).toBe(false);
        expect(isValidGuess('12a4', 4, 10)).toBe(false);
        expect(isValidGuess('1-23', 4, 10)).toBe(false);
    });
});
