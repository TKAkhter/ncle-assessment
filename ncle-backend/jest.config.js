module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js'],
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    testRegex: '(/src/tests/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
};