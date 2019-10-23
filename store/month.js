import Vue from 'vue';
import { UPDATE_READING_START } from './mutation-types';

const wipTableStub = ['21', '22', '23', '24'];

const generatedState = {};

wipTableStub.forEach((day) => {
  Vue.set(generatedState, day, {
    reading: {
      start: 0,
      end: null,
    },
  });
});

Vue.set(generatedState, '21', {
  reading: {
    start: 1,
    end: 26,
  },
  book: {
    title: "Yesterday's book",
    pages: 322,
  },
});

const state = () => generatedState;

const mutations = {
  [UPDATE_READING_START](state, { day, page }) {
    state[day].reading.start = page;
  },
  // UPDATE_READING_END(state, { day, value }) {
  //   state[day] = value;
  // },
  // UPDATE_READING_PROGRESS(state, { day, value }) {
  //   state[day] = value;
  // },
};

export { state, mutations };
