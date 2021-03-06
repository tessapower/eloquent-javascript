const retry = require('../ch08-bugs/retry');

test('only return result if call succeeds', async () => {
  const result = await retry.reliableMultiply(8, 8);
  expect(result).toBe(64);
});
