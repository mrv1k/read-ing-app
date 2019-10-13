import { ADD_NEW_BOOK } from './mutation-types';

export const state = () => ({
  list: [],
});

export const mutations = {
  [ADD_NEW_BOOK](state, { title, author, pages }) {
    state.list.push({ title, author, pages });
  },
};
