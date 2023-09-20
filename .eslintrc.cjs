module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true
    },
    extends: 'standard-with-typescript',
    overrides: [
        {
            env:{
                node: true
            },
            files: [
                '.eslintrc.{js,cjs}'
            ],
            parserOptions:{
                sourceType: 'script'
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        project: './tsconfig.json'
    },
    rules:{
        '@typescript-eslint/strict-boolean-expressions':'off',
        '@typescript-eslint/restrict-plus-operands':'off',
        '@typescript-eslint/restrict-template-expressions':'off'
    }
}