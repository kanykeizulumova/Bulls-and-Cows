export const createDigitValidator =
    (base: number) =>
        (char: string): boolean => {
            const ALPHABET = '0123456789abcdef';
            if (char.length !== 1) {
                return false;
            }
            const allowedChars = ALPHABET.slice(0, base);
            return allowedChars.includes(char.toLowerCase());
        }