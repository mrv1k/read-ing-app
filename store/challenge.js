import { SET_GOAL, SET_START, SET_DURATION } from './mutation-types';

export const state = () => ({
  goal: 25,
  start: new Date().toDateString(),
  duration: 50,
});

export const mutations = {
  [SET_GOAL](state, goal) {
    state.goal = goal;
  },
  [SET_START](state, date) {
    state.start = date;
  },
  [SET_DURATION](state, duration) {
    state.duration = duration;
  },
};
