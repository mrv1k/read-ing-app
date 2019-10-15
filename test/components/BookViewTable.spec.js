import { mount } from '@vue/test-utils';
import BookViewTable from '@/components/BookViewTable.vue';
import { state as makeState } from '@/store/books';

const requiredPropsStub = {
  headers: { title: '', author: '', pages: '' },
};

const factory = (overrides = {}) => {
  return mount(BookViewTable, {
    propsData: { ...requiredPropsStub },
    ...overrides,
  });
};

describe('BookViewTable', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(BookViewTable, {
      propsData: { ...requiredPropsStub },
      mocks: {
        $store: {
          state: {
            books: makeState(),
          },
        },
      },
    });

    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  describe('headers', () => {
    const factoryStubComputed = (props, overrides) =>
      mount(BookViewTable, {
        computed: { books: () => [] },
        propsData: { ...props },
        ...overrides,
      });

    it('has 3 rows', () => {
      const wrapper = factoryStubComputed(requiredPropsStub);

      const wrappers = wrapper.findAll('th').wrappers;

      expect(wrappers.length).toBe(3);
    });
    // uses prop as header cells text
    it('fills cells with prop values', () => {
      const props = {
        headers: { title: 'Title', author: 'Author', pages: 'Pages' },
      };
      const wrappers = factoryStubComputed(props).findAll('th').wrappers;

      wrappers.forEach((header, i) => {
        expect(header.text()).toBe(Object.values(props.headers)[i]);
      });
    });
  });

  describe('rows', () => {
    const factoryWithComputed = (books = []) =>
      factory({ computed: { books: () => books } });

    it('renders a row for a book', () => {
      const wrapper = factoryWithComputed([
        { title: 'title', author: 'author', pages: 10 },
      ]);

      const row = wrapper.find('tbody > tr');

      expect(row.exists()).toBeTruthy();
    });

    it('renders 2 rows for 2 books', () => {
      const books = [
        { title: 'title', author: 'author', pages: '10' },
        { title: 'Do the Work', author: 'Steven Pressfield', pages: 94 },
      ];

      const wrapper = factoryWithComputed(books);
      const rows = wrapper.findAll('tbody > tr').wrappers;

      expect(rows.length).toBe(2);
    });

    it('adds background class to every 2nd book', () => {
      const books = [
        { title: 'title', author: 'author', pages: '10' },
        { title: 'Do the Work', author: 'Steven Pressfield', pages: 94 },
      ];

      const wrapper = factoryWithComputed(books);
      const secondRow = wrapper.findAll('tbody > tr').at(1);

      expect(secondRow.html()).toContain('bg-gray-100');
    });

    it('has 3 cells', () => {
      const wrapper = factoryWithComputed([
        { title: 'title', author: 'author', pages: 10 },
      ]);

      const cells = wrapper.findAll('tbody > tr > td');

      expect(cells.length).toBe(3);
    });

    it('fills cells with book values', () => {
      const book = { title: 'title', author: 'author', pages: '10' };

      const wrapper = factoryWithComputed([book]);
      const cells = wrapper.findAll('tbody > tr > td');

      cells.wrappers.forEach((cell, i) => {
        expect(cell.text()).toBe(Object.values(book)[i]);
      });
    });
  });
});
