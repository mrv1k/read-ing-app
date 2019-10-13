import { mount } from '@vue/test-utils';
import BookViewTable from '@/components/BookViewTable.vue';
import { state as makeState } from '@/store/books';

const requiredProps = {
  headers: {
    title: 'title',
    author: 'author',
    pages: 'pages',
  },
};

describe('BookViewTable', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(BookViewTable, {
      propsData: { ...requiredProps },
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
});
