import { state as makeState, mutations } from '@/store/books';

describe('store/books', () => {
  describe('state', () => {
    it('should have a property to store books', () => {
      const state = makeState();

      const empty = {};

      expect(state).toMatchObject(empty);
    });
  });

  describe('mutations', () => {
    let state;
    beforeEach(() => {
      state = makeState();
    });

    describe('ADD_NEW_BOOK', () => {
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
        const book = { title: ' JohnDoe', author: 'JohnDoe' };

        const result = () => mutations.ADD_NEW_BOOK(state, book);

        expect(result).toThrowError();
      });

      // it('adds a book to the state', () => {
      //   const book = { title: ' JohnDoe', author: 'JohnDoe', pages: 10 };

      //   mutations.ADD_NEW_BOOK(state, book);

      //   expect(state.list).toContainEqual(book);
      // });

      // it('creates a copy of book object to solve by reference mutations', () => {
      //   const book = { title: 'Hello' };

      //   mutations.ADD_NEW_BOOK(state, book);
      //   const originalBook = { ...book };
      //   book.title = 'mutated';

      //   expect(state.list).toContainEqual(originalBook);
      // });
    });
  });
});
