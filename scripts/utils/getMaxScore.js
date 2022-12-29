function compare(a, b) {
  if (a.points > b.points) {
    return -1;
  }
  if (a.points < b.points) {
    return 1;
  }
  return 0;
}

export function getMaxScore(data) {
  const sortedData = [...data].sort(compare);
  const [maxScore] = sortedData;

  return [maxScore];
}