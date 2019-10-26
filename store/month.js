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
Vue.set(generatedState, '21', {
  reading: { start: 1, end: 26 },
  book,
});
Vue.set(generatedState, '22', {
  reading: { start: 26, end: 51 },
  book,
});
Vue.set(generatedState, '22', {
  reading: { start: 51, end: 76 },
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

export { state, mutations };
