import { state as makeState, mutations } from '@/store/books';

describe('store/books', () => {
  describe('state', () => {
    it('should have a property to store books', () => {
      const state = makeState();

      expect(state).toHaveProperty('list', expect.any(Array));
    });
  });

  describe('mutations', () => {
    describe('ADD_NEW_BOOK', () => {
      it('adds a book to the state', () => {
        const state = makeState();
        const book = { title: 'Hello' };

        mutations.ADD_NEW_BOOK(state, book);

        expect(state.list).toContainEqual(book);
      });

      it('creates a copy of book object to solve by reference mutations', () => {
        const state = makeState();
        const book = { title: 'Hello' };

        mutations.ADD_NEW_BOOK(state, book);
        const originalBook = { ...book };
        book.title = 'mutated';

        expect(state.list).toContainEqual(originalBook);
      });
    });
  });
});
