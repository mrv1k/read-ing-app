// import { SET_GOAL, SET_PROGRESS } from './mutation-types';

export const state = () => ({
  // day, date
  '17 Oct': [
    {
      pages: {
        start: 1,
        end: 26,
        towards: 'book.title',
        // getters
        progress: 25,
        pages_left: 175,
        progress_percent: 12,
      },
      book: {
        title: 'DTW',
        author: 'Steve',
        pages: 200,
      },
    },
  ],
});

export const mutations = {};

export const getters = {
  // fn(state, getters, rootState, rootGetters)
  bookPercentProgress(state) {
    const RATIO = 100;

    return Math.floor(
      (state['17 Oct'][0].pages.progress / state['17 Oct'][0].book.pages) *
        RATIO,
    );
  },
};
