import Vue from 'vue';
import { UPDATE_READING_START, UPDATE_READING_END } from './mutation-types';
import { currentMonth } from '@/utils/dates';

const generatedState = {};

currentMonth.daysArray.forEach((day) => {
  Vue.set(generatedState, day, {
    reading: {
      start: null,
      end: null,
    },
    book: {
      title: null,
      pages: null,
    },
  });
});

const book = {
  title: "Yesterday's book",
  pages: 322,
};
Vue.set(generatedState, '27', {
  reading: { start: 33, end: 55 },
  book,
});
Vue.set(generatedState, '28', {
  reading: { start: 44, end: 55 },
  book,
});

const state = () => generatedState;

const mutations = {
  [UPDATE_READING_START](state, { day, page }) {
    state[day].reading.start = page;
  },
  [UPDATE_READING_END](state, { day, page }) {
    state[day].reading.end = page;
  },
};

const getters = {
  continueYesterdayIfTodayIsEmpty: (state) => {
    const tryToContinueReading = (today) => {
      return todayExists(state[today])
        ? state[today]
        : continueYesterday(state, today);
    };

    return tryToContinueReading;
  },
};

const todayExists = (today) => today.reading.start !== null;

const continueYesterday = (state, today) => {
  const yesterdayNum = (Number(today) - 1).toString();
  const yesterday = state[yesterdayNum];

  if (!yesterday.reading.end) return state[today];

  return createPartialYesterdayCopy(yesterday);
};
const createPartialYesterdayCopy = (yesterday) =>
  Object.assign(
    {},
    {
      book: { ...yesterday.book },
      reading: { start: yesterday.reading.end, end: null },
    },
  );
// take yesterday book, use yesterday end as todays start

// const temp = reading.progress + state.reading.end;
// const temp = reading.progress;

export { state, mutations, getters };
