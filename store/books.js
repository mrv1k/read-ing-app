import Vue from 'vue';
import { ADD_NEW_BOOK } from './mutation-types';

export const state = () => ({});

export const mutations = {
  // copy is created before payload
  [ADD_NEW_BOOK](state, { title, author, pages }) {
    if (title === undefined || author === undefined || pages === undefined) {
      throw new Error('ADD_NEW_BOOK: Missing a field');
    }

    Vue.set(state, title, { author, pages });
  },
};
