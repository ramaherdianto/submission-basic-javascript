import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

// Test: sum of two positive numbers
test('sum of two positive numbers', (t) => {
    assert.strictEqual(sum(5, 3), 8);
    assert.strictEqual(sum(10, 20), 30);
});

// Test: sum when one or both inputs are non-number types
test('sum with non-number inputs returns 0', (t) => {
    assert.strictEqual(sum('5', 3), 0);
    assert.strictEqual(sum(5, '3'), 0);
    assert.strictEqual(sum(null, undefined), 0);
    assert.strictEqual(sum({}, []), 0);
    assert.strictEqual(sum(true, false), 0);
});

// Test: sum when one or both inputs are negative numbers
test('sum with negative numbers returns 0', (t) => {
    assert.strictEqual(sum(-5, 3), 0);
    assert.strictEqual(sum(5, -3), 0);
    assert.strictEqual(sum(-5, -3), 0);
});

// Test: sum with zero as input
test('sum with zero as input', (t) => {
    assert.strictEqual(sum(0, 0), 0);
    assert.strictEqual(sum(0, 5), 5);
    assert.strictEqual(sum(5, 0), 5);
});

// Test: sum when inputs are large numbers
test('sum of large numbers', (t) => {
    assert.strictEqual(sum(1000000, 2000000), 3000000);
});
