import { mount } from '@vue/test-utils';
import BookAddNew from '@/components/BookAddNew.vue';

const factory = () => {
  return mount(BookAddNew, {
    propsData: {
      headers: {
        title: 'title',
        author: 'author',
        pages: 'pages',
      },
    },
  });
};

describe('BookAddNew', () => {
  it('is a Vue instance', () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("should have and input to add book's title", () => {
    const wrapper = factory();

    const title = wrapper.find('input#book-title');

    expect(title.exists()).toBeTruthy();
  });

  it("should have an input to add book author's name", () => {
    const wrapper = factory();

    const author = wrapper.find('input#book-author');

    expect(author.exists()).toBeTruthy();
  });

  it("should have an input to add book's page count", () => {
    const wrapper = factory();

    const pages = wrapper.find('input#book-pages');

    expect(pages.exists()).toBeTruthy();
  });

  it('should have a button to store book', () => {
    const wrapper = factory();

    const button = wrapper.find('button');

    expect(button.exists()).toBeTruthy();
  });

  it.skip('should notify user that book is recorded', () => {});
});
