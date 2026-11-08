import { describe, it, expect } from 'vitest';
import { evaluateGuess } from './evaluateGuess';

describe('evaluateGuess', () => {
    it('should return all bulls when the guess matches the secret exactly', () => {
        expect(evaluateGuess('1234', '1234')).toEqual({ bulls: 4, cows: 0 });
    });

    it('should return all cows when all digits are present but in wrong positions', () => {
        expect(evaluateGuess('1234', '4321')).toEqual({ bulls: 0, cows: 4 });
    });

    it('should return zero bulls and cows when no digits match', () => {
        expect(evaluateGuess('1234', '5678')).toEqual({ bulls: 0, cows: 0 });
    });

    it('should correctly calculate mixed bulls and cows', () => {
        expect(evaluateGuess('1234', '1325')).toEqual({ bulls: 1, cows: 2 });
    });

    it('should correctly handle secrets and guesses with leading zeroes', () => {
        expect(evaluateGuess('0123', '0321')).toEqual({ bulls: 2, cows: 2 });
    });

    it('should be case-insensitive for hex digits', () => {
        expect(evaluateGuess('1a2b', '1A2B')).toEqual({ bulls: 4, cows: 0 });
        expect(evaluateGuess('1a2b', 'B2A1')).toEqual({ bulls: 0, cows: 4 });
        expect(evaluateGuess('1A2F', '1a3f')).toEqual({ bulls: 3, cows: 0 });
    });
});
