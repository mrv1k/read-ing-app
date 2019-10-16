import { SET_GOAL, SET_PROGRESS } from './mutation-types';

export const state = () => ({
  goal: 25,
  progress: 20,
});

export const mutations = {
  [SET_GOAL](state, goal) {
    state.goal = goal;
  },
  [SET_PROGRESS](state, progress) {
    state.progress = progress;
  },
};

export const getters = {
  goalStatusForToday(state) {
    return state.progress >= state.goal;
  },
};
