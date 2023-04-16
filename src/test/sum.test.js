const sum = require('./sum');//import func 'sum' from the file

test('adds 1 + 2 to equal 3', () => { //
  expect(sum(1, 2)).toBe(3);
});

test('adds 40 + 32 to equal 72', () => { //
    expect(sum(40, 32)).toBe(72);
  });