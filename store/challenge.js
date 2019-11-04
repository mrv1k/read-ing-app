import { SET_GOAL, SET_START_DATE, SET_DURATION } from './mutation-types';

export const state = () => ({
  goal: 25,
  startDate: null,
  duration: 50,
});

export const mutations = {
  [SET_GOAL](state, goal) {
    state.goal = goal;
  },
  [SET_START_DATE](state, date) {
    state.startDate = date;
  },
  [SET_DURATION](state, duration) {
    state.duration = duration;
  },
};
