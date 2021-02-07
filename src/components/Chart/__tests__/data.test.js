import generateData from '../data';

test('Generate an object from array', () => {
  const arr = [12, 34, 43, 90, 60];
  const result = [
    {"x": 0, "y": 12}, {"x": 1, "y": 34},
    {"x": 2, "y": 43}, {"x": 3, "y": 90},
    {"x": 4, "y": 60}
  ]
  expect(generateData(arr)).toStrictEqual(result);
});