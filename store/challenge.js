import { SET_GOAL } from './mutation-types';

export const state = () => ({
  goal: 25,
});

export const mutations = {
  [SET_GOAL](state, goal) {
    state.goal = goal;
  },
};
