import Vue from 'vue';
import { currentMonth } from '@/utils/dates';
import { continueYesterdayReading } from '@/utils/store-month-helpers';
import {
  SET_READING_START,
  SET_READING_END,
  SET_BOOK_TITLE,
  SET_BOOK_PAGES,
  SET_BOOK_PROGRESS,
  SET_READING_PROGRESS,
} from '@/store/mutation-types';

const generatedState = {};

currentMonth.daysArray.forEach((day) => {
  Vue.set(generatedState, day, {
    reading: {
      start: null,
      end: null,
      progress: null,
    },
    book: {
      title: null,
      pages: null,
      progress: null,
    },
  });
});

Vue.set(generatedState, '29', {
  reading: { start: 1, end: 44, progress: null },
  book: {
    title: "Yesterday's book",
    pages: 322,
    progress: 13,
  },
});
Vue.set(generatedState, '30', {
  reading: { start: 44, end: 55, progress: null },
  book: {
    title: "Yesterday's book",
    pages: 322,
    progress: 3,
  },
});

const state = () => generatedState;

const mutations = {
  [SET_READING_START](state, { day, page }) {
    state[day].reading.start = page;
  },
  [SET_READING_END](state, { day, page }) {
    state[day].reading.end = page;
  },
  [SET_READING_PROGRESS](state, { day, page }) {
    state[day].reading.end = page;
  },

  [SET_BOOK_TITLE](state, { day, title }) {
    state[day].book.title = title;
  },
  [SET_BOOK_PAGES](state, { day, pages }) {
    state[day].book.pages = pages;
  },
  [SET_BOOK_PROGRESS](state, { day, percent }) {
    state[day].book.progress = percent;
  },
};

const getters = {
  bookCompletedPercent: (state) => (day, book) => {
    const yesterday = (Number(day) - 1).toString();

    if (state[yesterday]) {
      const yesterdayBook = state[yesterday].book;

      if (yesterdayBook.title === null) return 0;

      if (yesterdayBook.title === book.title) {
        // console.log('yesterday', yesterday, yesterdayBook.progress);
        // console.log('day', day, book.progress);

        return yesterdayBook.progress + book.progress;
      }
    }

    return book.progress;
  },
};

const actions = {
  continueYesterdayReading,
};

export { state, mutations, getters, actions };
