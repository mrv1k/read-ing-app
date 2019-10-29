import Vue from 'vue';
import {
  UPDATE_READING_START,
  UPDATE_READING_END,
  SET_BOOK_TITLE,
  SET_BOOK_PAGES,
  SET_BOOK_PROGRESS,
} from './mutation-types';
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
      completedPercent: null,
    },
  });
});

const book = {
  title: "Yesterday's book",
  pages: 322,
  completedPercent: '1%',
};
Vue.set(generatedState, '27', {
  reading: { start: 1, end: 44 },
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
  [SET_BOOK_TITLE](state, { day, title }) {
    state[day].book.title = title;
  },
  [SET_BOOK_PAGES](state, { day, pages }) {
    state[day].book.pages = pages;
  },
  [SET_BOOK_PROGRESS](state, { day, percent }) {
    state[day].book.completedPercent = percent;
  },
};

const getters = {
  continueReading: (state) => continueReading.bind(null, state),
};

export { state, mutations, getters };
