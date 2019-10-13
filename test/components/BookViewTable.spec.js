import { mount } from '@vue/test-utils';
import BookViewTable from '@/components/BookViewTable.vue';

describe('BookViewTable', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(BookViewTable, {
      propsData: {
        headers: {
          title: 'title',
          author: 'author',
          pages: 'pages',
        },
      },
      mocks: {
        $store: {
          state: {
            books: {},
          },
        },
      },
    });

    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
