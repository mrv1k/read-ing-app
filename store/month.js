import Vue from 'vue';
import { UPDATE_READING_START } from './mutation-types';

const wipTableStub = ['21', '22', '23'];

const reading = {
  start: 0,
  end: null,
  progress: '',
};
// progress: reading.end ? reading.end - reading.start : '',

const generatedState = {};
wipTableStub.forEach((day) => {
  Vue.set(generatedState, day, {
    reading,
  });
});

const state = () => generatedState;

const mutations = {
  [UPDATE_READING_START](state, { day, page }) {
    state[day] = page;
  },
  // UPDATE_READING_END(state, { day, value }) {
  //   state[day] = value;
  // },
  // UPDATE_READING_PROGRESS(state, { day, value }) {
  //   state[day] = value;
  // },
};

export { state, mutations };
