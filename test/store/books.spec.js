import { state as makeState, mutations } from '@/store/books';

describe('store/books', () => {
  describe('state', () => {
    it('exist', () => {
      const state = makeState();

      expect(state).toMatchObject(expect.any(Object));
    });
  });

  describe('mutations', () => {
    let state;
    beforeEach(() => {
      state = makeState();
    });

    describe('ADD_NEW_BOOK', () => {
      it('adds a book directly to the state using title property as key', () => {
        const book = { title: 'DTW', author: 'JohnDoe', pages: 10 };

        mutations.ADD_NEW_BOOK(state, book);

        expect(state).toHaveProperty('DTW');
      });

      it('added book property contains [title, author, pages] props', () => {
        const book = { title: 'DTW', author: 'JohnDoe', pages: 10 };

        mutations.ADD_NEW_BOOK(state, book);
        const result = state.DTW;

        expect(result).toMatchObject(book);
      });

      describe('payload validation', () => {
        it('throws an error if title is missing', () => {
          const book = { author: 'JohnDoe', pages: 10 };

          const result = () => mutations.ADD_NEW_BOOK(state, book);

          expect(result).toThrowError();
        });

        it('throws an error if author is missing', () => {
          const book = { title: 'DTW', pages: 10 };

          const result = () => mutations.ADD_NEW_BOOK(state, book);

          expect(result).toThrowError();
        });

        it('throws an error if pages is missing', () => {
          const book = { title: 'DTW', author: 'JohnDoe' };

          const result = () => mutations.ADD_NEW_BOOK(state, book);

          expect(result).toThrowError();
        });

        it('accepts book payload if [title, author, pages] props are present', () => {
          const book = { title: 'DTW', author: 'JohnDoe', pages: 10 };

          const result = () => mutations.ADD_NEW_BOOK(state, book);

          expect(result).not.toThrowError();
        });
      });
    });
  });
});
