export const countPossibleSecrets = (length: number, base: number): number => {
    if (length <= 0) {
        return 1;
    }
    if (length > base) {
        return 0;
    }
    let permutations = 1;
    for (let i = 0; i < length; i++) {
        permutations *= (base - i);
    }

    return permutations;
};
