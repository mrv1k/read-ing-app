import Vue from 'vue';
import { UPDATE_READING_START, UPDATE_READING_END } from './mutation-types';
import { currentMonth } from '@/utils/dates';
import { continueReading } from '@/utils/store-month-helpers';

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
  continueReading: (state) => continueReading.bind(null, state),
};

// const temp = reading.progress + state.reading.end;
// const temp = reading.progress;

export { state, mutations, getters };
