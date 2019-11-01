import Vue from 'vue';
import { currentMonth } from '@/utils/dates';
import { continueYesterdayReading } from '@/utils/store-month-helpers';
import {
  SET_SESSION_START,
  SET_SESSION_END,
  SET_SESSION_TITLE,
  SET_SESSION_PAGES_COUNT,
} from '@/store/mutation-types';
import { percentage } from '~/utils/helpers';

const generatedState = {};

currentMonth.daysArray.forEach((day) => {
  Vue.set(generatedState, day, {
    start: null,
    end: null,
    title: null,
    pagesCount: null,
  });
});

Vue.set(generatedState, '02', {
  start: 1,
  end: 44,
  title: "November's book",
  pagesCount: 322,
});
Vue.set(generatedState, '03', {
  start: 44,
  end: 55,
  title: "November's book",
  pagesCount: 322,
});
Vue.set(generatedState, '04', {
  start: 55,
  end: 100,
  title: "November's book",
  pagesCount: 322,
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
};

const getters = {
  arrayState(monthState) {
    return Object.entries(monthState);
  },
  pagesProgress: (monthState) => (day) => {
    const state = monthState[day];

    if (!state.end) return '';

    return state.end - state.start;
  },

  bookProgress: (monthState, getters) => (day) => {
    const state = monthState[day];

    if (!state.pagesCount) return 'missing pages';
    if (!getters.pagesProgress(day)) return '';

    return percentage(getters.pagesProgress(day), state.pagesCount);
  },

  bookProgressTotal: (monthState, getters) => (payloadDay) => {
    const payloadState = monthState[payloadDay];

    const bookIsMissing = () => !payloadState.title || !payloadState.pagesCount;
    if (bookIsMissing()) return '';

    const filteredByDays = getters.arrayState.filter(
      ([aDay]) => aDay <= payloadDay,
    );

    const filterByBooks = (state) =>
      state.filter(
        ([aDay, aState]) => aState.title === monthState[payloadDay].title,
      );

    const countTotalProgress = (state) =>
      state.reduce((acc, [aDay]) => {
        return acc + getters.bookProgress(aDay);
      }, 0);

    return countTotalProgress(filterByBooks(filteredByDays));
  },
};

const actions = {
  continueYesterdayReading,
};

export { state, mutations, getters, actions };
