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

Vue.set(generatedState, '29', {
  start: 1,
  end: 44,
  title: "Yesterday's book",
  pagesCount: 322,
});
Vue.set(generatedState, '30', {
  start: 44,
  end: 55,
  title: "Yesterday's book",
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
  pagesProgress: (monthState, getters) => (day) => {
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

  bookProgressTotal: (monthState, getters) => (day) => {
    const dayBeforeNum = (Number(day) - 1).toString();

    const thatDay = monthState[day];
    const dayBefore = monthState[dayBeforeNum];

    if (dayBefore) {
      if (!dayBefore.pagesCount) return 0;

      if (thatDay.title === dayBefore.title) {
        return getters.bookProgress(day) + getters.bookProgress(dayBeforeNum);
      }
    }

    return getters.bookProgress(day);
  },
};

const actions = {
  continueYesterdayReading,
};

export { state, mutations, getters, actions };
