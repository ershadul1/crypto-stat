import sortData from '../sortData';

test('Sort array of objects that contain strings as values in descending order', () => {
  const arr = [
    { name: 'tether' },
    { name: 'bitcoin' },
    { name: 'xrp' },
    { name: 'litecoin' },
  ];
  const result = [
    { name: 'xrp' },
    { name: 'tether' },
    { name: 'litecoin' },
    { name: 'bitcoin' },
  ];
  expect(sortData(arr, 'name', 'desc')).toStrictEqual(result);
});

test('Sort array of objects that contain strings as values in ascending order', () => {
  const arr = [
    { name: 'tether' },
    { name: 'bitcoin' },
    { name: 'xrp' },
    { name: 'litecoin' },
  ];
  const result = [
    { name: 'bitcoin' },
    { name: 'litecoin' },
    { name: 'tether' },
    { name: 'xrp' },
  ];
  expect(sortData(arr, 'name', 'asc')).toStrictEqual(result);
});

test('Sort array of objects that contain number as values in descending order', () => {
  const arr = [
    { price: 5214 },
    { price: 1214 },
    { price: -214 },
    { price: 4 },
  ];
  const result = [
    { price: 5214 },
    { price: 1214 },
    { price: 4 },
    { price: -214 },
  ];
  expect(sortData(arr, 'price', 'desc')).toStrictEqual(result);
});

test('Sort array of objects that contain number as values in ascending order', () => {
  const arr = [
    { price: 5214 },
    { price: 1214 },
    { price: -214 },
    { price: 4 },
  ];
  const result = [
    { price: -214 },
    { price: 4 },
    { price: 1214 },
    { price: 5214 },
  ];
  expect(sortData(arr, 'price', 'asc')).toStrictEqual(result);
});
