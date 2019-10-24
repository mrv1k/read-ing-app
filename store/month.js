import Vue from 'vue';
import { UPDATE_READING_START, UPDATE_READING_END } from './mutation-types';

const wipTableStub = ['21', '22', '23', '24'];

const generatedState = {};

wipTableStub.forEach((day) => {
  Vue.set(generatedState, day, {
    reading: {
      start: null,
      end: null,
    },
  });
});

Vue.set(generatedState, '21', {
  reading: {
    start: 1,
    end: 26,
  },
  // book: {
  //   title: "Yesterday's book",
  //   pages: 322,
  // },
});

// generatedState['23'].reading.end = 55;

const state = () => generatedState;

const mutations = {
  [UPDATE_READING_START](state, { day, page }) {
    state[day].reading.start = page;
  },
  [UPDATE_READING_END](state, { day, page }) {
    state[day].reading.end = page;
  },
  // UPDATE_READING_PROGRESS(state, { day, value }) {
  //   state[day] = value;
  // },
};

export { state, mutations };
