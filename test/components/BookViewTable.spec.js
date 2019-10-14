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

  describe('table headers', () => {
    const factoryStubComputed = (props, overrides) => {
      return mount(BookViewTable, {
        computed: {},
        propsData: { ...props },
        ...overrides,
      });
    };

    it('should render 3 rows: [title, author and pages]', () => {
      const wrapper = factoryStubComputed(requiredPropsStub);

      const wrappers = wrapper.findAll('th').wrappers;

      expect(wrappers.length).toBe(3);
    });

    it('uses headers prop to render headers text', () => {
      const props = {
        headers: { title: 'Title', author: 'Author', pages: 'Pages' },
      };
      const wrappers = factoryStubComputed(props).findAll('th').wrappers;

      wrappers.forEach((header, index) => {
        const headerValues = Object.values(props.headers);
        expect(header.text()).toBe(headerValues[index]);
      });
    });
  });

  describe.skip('table rows', () => {
    it('should render a table row for a book', () => {
      const wrapper = factory({
        computed: {
          books() {
            return [{ title: 'War and Peace', author: 'Leo', pages: 666 }];
          },
        },
      });

      const row = wrapper.find('tr');

      expect(row.exists()).toBeTruthy();
    });
  });
});
