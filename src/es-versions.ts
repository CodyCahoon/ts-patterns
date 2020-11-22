// ES6 - ES2015
// Block-scoped variables
const E0 = 'A';
let E2 = 4;

// Arrow fns
const E3 = () => /* same */ this;

// Default params
const E4 = (p1 = 1, p2 = '2') => {};

// Rest/spread
const E5 = (...p) => {};
const E6 = [...[1]];

// Template Literals
const E7 = `${E0}`;

// Binary/Octal
const E8 = 0b11;
const E9 = 0o11;

// Shorthand syntax
const name = 'Name';
const E10 = { name };

// Computed props in objects
const E11 = { ['na' + 'me']: 'Name' };

// Destructuring
const { value } = { value: 'string ' };

// exports/imports
export function E12() {}
export default class {}

// classes
// Set
// Map
// Object.assign
// Array.find|findIndex
// String.repeat|startsWith|endsWith|includes
// Number.isNaN|isFinite
// Math.trunc|sign
// Promise|Promise.all

// ES7 - ES2016

// Exponent
const exponent = 2 ** 2;

// Array.includes

// ES8 - ES2017

// async/await
// String.padLeft|padRight
// Object.values|entries

// ES9 - ES2018

// Promise.finally
// Object destructuring const a = { ...props };

// ES10 - ES2019

// Array.flat
// Array.flatMap

// Object.fromEntries

// String.trimStart|trimEnd

// catch {} (without error)

// ES11 - ES2020

// BigInt

// Nullish coalescing
// Optional chaining
// Promise.allSettled
// String.matchAll
