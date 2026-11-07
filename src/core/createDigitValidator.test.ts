import { describe, it, expect } from 'vitest';
import { createDigitValidator } from './createDigitValidator';

describe('createDigitValidator', () => {
    it('should validate binary digits (base 2)', () => {
        const isBinDigit = createDigitValidator(2);

        expect(isBinDigit('0')).toBe(true);
        expect(isBinDigit('1')).toBe(true);
        expect(isBinDigit('2')).toBe(false);
        expect(isBinDigit('a')).toBe(false);
    });

    it('should validate octal digits (base 8)', () => {
        const isOctDigit = createDigitValidator(8);

        expect(isOctDigit('0')).toBe(true);
        expect(isOctDigit('7')).toBe(true);
        expect(isOctDigit('8')).toBe(false);
        expect(isOctDigit('9')).toBe(false);
        expect(isOctDigit('b')).toBe(false);
    });

    it('should validate decimal digits (base 10)', () => {
        const isDecDigit = createDigitValidator(10);

        expect(isDecDigit('0')).toBe(true);
        expect(isDecDigit('5')).toBe(true);
        expect(isDecDigit('9')).toBe(true);
        expect(isDecDigit('a')).toBe(false);
        expect(isDecDigit('A')).toBe(false);
        expect(isDecDigit('-')).toBe(false);
    });

    it('should validate hexadecimal digits case-insensitively (base 16)', () => {
        const isHexDigit = createDigitValidator(16);

        expect(isHexDigit('0')).toBe(true);
        expect(isHexDigit('9')).toBe(true);
        expect(isHexDigit('a')).toBe(true);
        expect(isHexDigit('A')).toBe(true);
        expect(isHexDigit('f')).toBe(true);
        expect(isHexDigit('F')).toBe(true);
        expect(isHexDigit('g')).toBe(false);
        expect(isHexDigit('G')).toBe(false);
    });

    it('should return false for empty or multi-character strings', () => {
        const isDecDigit = createDigitValidator(10);

        expect(isDecDigit('')).toBe(false);
        expect(isDecDigit('10')).toBe(false);
        expect(isDecDigit(' ')).toBe(false);
    });
});
