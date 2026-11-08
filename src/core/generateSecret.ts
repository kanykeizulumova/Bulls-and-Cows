export const generateSecret = (
    length: number,
    base: number,
    random: () => number = Math.random
): string => {
    if (length <= 0) return '';
    if (length > base) {
        throw new Error('Length cannot exceed base');
    }

    const availableCharacters = '0123456789abcdefghijklmnopqrstuvwxyz'
        .slice(0, base)
        .split('');

    const buildSecret = (pool: string[], remaining: number): string[] => {
        if (remaining === 0) return [];

        const index = Math.floor(random() * pool.length);
        const char = pool[index]!;
        const nextPool = pool.filter((_, i) => i !== index);

        return [char, ...buildSecret(nextPool, remaining - 1)];
    };

    return buildSecret(availableCharacters, length).join('');
};