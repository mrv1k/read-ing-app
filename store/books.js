import { ADD_BOOK } from './mutation-types';

export const state = () => ({
  books: [],
});

export const mutations = {
  [ADD_BOOK](state, book) {
    state.books.push(Object.assign({}, book));
  },
};
