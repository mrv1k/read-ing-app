function continueReading(state, today) {
  if (todayExists(state[today])) return state[today];

  const yesterday = (Number(today) - 1).toString();
  const yesterdayState = state[yesterday];
  if (yesterdayExists(yesterdayState)) {
    return createTodayFromYesterday(yesterdayState);
  }

  return state[today];
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
