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
Vue.set(generatedState, '26', {
  reading: { start: 22, end: 33 },
  book,
});
Vue.set(generatedState, '27', {
  reading: { start: 33, end: 44 },
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
