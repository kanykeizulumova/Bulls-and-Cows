import { describe, it, expect } from 'vitest';
import { generateSecret } from './generateSecret';

describe('generateSecret', () => {
    it('should generate a string of the requested length', () => {
        const secret = generateSecret(4, 10);
        expect(secret).toHaveLength(4);
    });

    it('should generate a string consisting of unique digits only', () => {
        const secret = generateSecret(4, 10);
        const uniqueChars = new Set(secret);
        expect(uniqueChars.size).toBe(4);
    });

    it('should only use valid characters for the given base', () => {
        const binSecret = generateSecret(2, 2);
        expect(binSecret).toMatch(/^[01]{2}$/);

        const octSecret = generateSecret(4, 8);
        expect(octSecret).toMatch(/^[0-7]{4}$/);

        const decSecret = generateSecret(4, 10);
        expect(decSecret).toMatch(/^[0-9]{4}$/);

        const hexSecret = generateSecret(4, 16);
        expect(hexSecret).toMatch(/^[0-9a-f]{4}$/);
    });

    it('should produce lowercase characters for hex base', () => {
        const hexSecret = generateSecret(6, 16);
        expect(hexSecret).toBe(hexSecret.toLowerCase());
    });

    it('should be deterministic when a custom random generator is provided', () => {
        const sequence = [0, 0, 0, 0];
        let i = 0;
        const mockRandom1 = () => sequence[i++ % sequence.length] ?? 0;
        const secret1 = generateSecret(4, 10, mockRandom1);

        i = 0;
        const mockRandom2 = () => sequence[i++ % sequence.length] ?? 0;
        const secret2 = generateSecret(4, 10, mockRandom2);

        expect(secret1).toBe(secret2);
    });

    it('should allow secrets starting with zero', () => {
        const mockRandom = () => 0;
        const secret = generateSecret(4, 10, mockRandom);
        expect(secret.startsWith('0')).toBe(true);
    });
});
