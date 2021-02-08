import roundNum from '../roundNum';

test('Round number to two decimal places ', () => {
  expect(roundNum(2.879)).toBe(2.88);
});
