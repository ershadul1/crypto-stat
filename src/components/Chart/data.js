const generateData = arr => {
  const len = arr.length;
  const result = [];
  for (let i = 0; i < len; i += 1) {
    result.push({ x: i, y: arr[i] });
  }
  return result;
};

export default generateData;
