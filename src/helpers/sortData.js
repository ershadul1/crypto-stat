const sortData = (arr, sortBy, order) => {
  const newArr = [...arr];
  if (typeof newArr[0][sortBy] === 'string') {
    if (order === 'desc') {
      return newArr.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
    }
    return newArr.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  }
  if (order === 'desc') {
    newArr.sort((a, b) => b[sortBy] - a[sortBy]);
    return newArr;
  }
  newArr.sort((a, b) => a[sortBy] - b[sortBy]);
  return newArr;
};

export default sortData;
