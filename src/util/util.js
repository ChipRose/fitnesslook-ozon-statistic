export const getRandomNumber = (min = 0, max = 1) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const getRandomUniQArray = (min = 0, max, length) => {
  const arr = [];
  while (arr.length < length) {
    const r = Math.floor(Math.random() * max) + min;
    if (arr.indexOf(r) === -1) {
      arr.push(r);
    }
  }
  return arr;
}

const addNull = (num) => {
  return num.toString().length < 2 ? `0${num}` : num.toString();
}

export const formatDatesPeriod = (period) => {
  const [start, end] = period;
  return `${addNull(start.getDate())}.${addNull(start.getMonth())} - ${addNull(end.getDate())}.${addNull(end.getMonth())}`
}
