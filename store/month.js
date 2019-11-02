import Vue from 'vue';
import { currentMonth } from '@/utils/dates';
import { continueYesterdayReading } from '@/utils/store-month-helpers';
import {
  SET_SESSION_START,
  SET_SESSION_END,
  SET_SESSION_TITLE,
  SET_SESSION_PAGES_COUNT,
  SET_SESSION_PROGRESS,
} from '@/store/mutation-types';

const generatedState = {};

currentMonth.daysArray.forEach((day) => {
  Vue.set(generatedState, day, {
    start: null,
    end: null,
    title: null,
    pagesCount: null,
    progress: {
      pages: null,
      book: null,
    },
  });
});

const state = () => generatedState;

const mutations = {
  [SET_SESSION_START](state, { day, page }) {
    state[day].start = page;
  },
  [SET_SESSION_END](state, { day, page }) {
    state[day].end = page;
  },
  [SET_SESSION_TITLE](state, { day, title }) {
    state[day].title = title;
  },
  [SET_SESSION_PAGES_COUNT](state, { day, pagesCount }) {
    state[day].pagesCount = pagesCount;
  },
  [SET_SESSION_PROGRESS](state, { day, data }) {
    state[day].progress.pages = data.pages;
    state[day].progress.book = data.book;
  },
};

const actions = {
  continueYesterdayReading,
};

export { state, mutations, actions };
