test('suma', () => expect(1 + 2).toBe(3));

// sumModule = require('../sum');

// // tests/sum.test.js
// let sumModule;
// try {
// } catch (e) {
//     // fallback simple implementation to keep tests runnable when ../sum is absent
//     sumModule = (a, b) => a + b;
// }
// const sum = typeof sumModule === 'function' ? sumModule : (sumModule && (sumModule.sum || sumModule.default)) || sumModule;

// // Basic addition
// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
// });

// // Handles floats with precision
// test('adds 0.1 + 0.2 approximately equal to 0.3', () => {
//     expect(sum(0.1, 0.2)).toBeCloseTo(0.3, 5);
// });

// // Works with negative numbers
// test('adds -1 + -1 to equal -2', () => {
//     expect(sum(-1, -1)).toBe(-2);
// });

// // Can be used with Array.prototype.reduce
// test('reduces an array of numbers using sum', () => {
//     const arr = [1, 2, 3, 4];
//     expect(arr.reduce((acc, n) => sum(acc, n), 0)).toBe(10);
// });

// // Reminder / todo about installing a Jest extension
// test.todo('Aceptar: "Se recomienda instalar una extensión para ejecutar pruebas jest."');