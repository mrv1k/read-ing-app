import { SET_GOAL, SET_START_DATE } from './mutation-types';

export const state = () => ({
  goal: 25,
  startDate: null,
});

export const mutations = {
  [SET_GOAL](state, goal) {
    state.goal = goal;
  },
  [SET_START_DATE](state, date) {
    state.startDate = date;
  },
};
