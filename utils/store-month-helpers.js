function continueReading(state, today) {
  let todayState;
  if (todayExists(state[today])) {
    todayState = state[today];
  }

  const yesterday = (Number(today) - 1).toString();
  const yesterdayState = state[yesterday];
  if (yesterdayExists(yesterdayState)) {
    todayState = createTodayFromYesterday(yesterdayState);
  }

  return todayState;
}

const todayExists = (today) => today.reading.start !== null;

const yesterdayExists = (yesterday) => yesterday.reading.end !== null;

function createTodayFromYesterday(yesterday) {
  return Object.assign(
    {},
    {
      book: { ...yesterday.book },
      reading: { start: yesterday.reading.end, end: null },
    },
  );
}

export { continueReading };
