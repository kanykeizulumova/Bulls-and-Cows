import { describe, it, expect } from 'vitest';
import { countPossibleSecrets } from './countPossibleSecrets';

describe('countPossibleSecrets', () => {
    it('should calculate permutations for binary base (length 2, base 2)', () => {
        expect(countPossibleSecrets(2, 2)).toBe(2);
    });

    it('should calculate permutations for decimal base (length 4, base 10)', () => {
        // 10 * 9 * 8 * 7 = 5040
        expect(countPossibleSecrets(4, 10)).toBe(5040);
    });

    it('should calculate permutations for octal base (length 3, base 8)', () => {
        // 8 * 7 * 6 = 336
        expect(countPossibleSecrets(3, 8)).toBe(336);
    });

    it('should calculate permutations for hexadecimal base (length 4, base 16)', () => {
        // 16 * 15 * 14 * 13 = 43680
        expect(countPossibleSecrets(4, 16)).toBe(43680);
    });

    it('should return 1 when length is 0', () => {
        expect(countPossibleSecrets(0, 10)).toBe(1);
    });

    it('should return 0 when length exceeds base', () => {
        expect(countPossibleSecrets(3, 2)).toBe(0);
        expect(countPossibleSecrets(11, 10)).toBe(0);
    });
});
