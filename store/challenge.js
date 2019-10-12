import { SET_GOAL, SET_PROGRESS, ADD_BOOK } from './mutation-types';

export const state = () => ({
  books: [],
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
  [ADD_BOOK](state, book) {
    state.books.push(book);
  },
};

export const getters = {
  goalStatus(state) {
    return state.progress >= state.goal;
  },
};
