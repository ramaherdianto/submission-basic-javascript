import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('sum return correct result', () => {
    // Test case 1: sum of negative numbers
    assert.strictEqual(sum(-2, -3), -5, '-2 + -3 should equal -5');

    // Test case 2: sum of positive numbers
    assert.strictEqual(sum(2, 3), 5, '2 + 3 should equal 5');

    // Test case 3: sum of a positive and negative number
    assert.strictEqual(sum(2, -3), -1, '2 + -3 should equal -1');
});
