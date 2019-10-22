import Vue from 'vue';
import { ADD_NEW_BOOK } from './mutation-types';

export const state = () => ({});

export const mutations = {
  /**
   * Add top level prop to book state
   * @description Payload must be plain JS object (non reactive)
   * @param {Object} state - books state
   * @param {Object} payload - book payload
   * @param {String} payload.title
   * @param {String} payload.author
   * @param {Number} payload.pages
   */
  [ADD_NEW_BOOK](state, { title, author, pages }) {
    if (title === undefined || author === undefined || pages === undefined) {
      throw new Error('ADD_NEW_BOOK: Missing a field');
    }

    Vue.set(state, title, { title, author, pages });
  },
};
