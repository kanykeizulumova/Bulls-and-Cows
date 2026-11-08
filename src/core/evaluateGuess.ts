export const evaluateGuess = (secret: string, guess: string): { bulls: number; cows: number } => {
    const s = secret.toLowerCase().split('');
    const g = guess.toLowerCase().split('');

    const bulls = g.filter((char, index) => char === s[index]).length;
    const cows = g.filter((char, index) => char !== s[index] && s.includes(char)).length;

    return { bulls, cows };
};