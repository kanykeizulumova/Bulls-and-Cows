import { defineConfig, configDefaults } from 'vitest/config';

export default defineConfig({
    test: {
        environment: 'node',
        globals: true,
        passWithNoTests: true,
        exclude: [...configDefaults.exclude, '**/__drafts__/**'],
    },
});
