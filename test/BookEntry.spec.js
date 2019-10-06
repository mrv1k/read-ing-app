import { mount } from '@vue/test-utils';
import BookEntry from '@/components/BookEntry.vue';

describe('BookEntry', () => {
  it('should have title input', () => {
    const wrapper = mount(BookEntry);

    const title = wrapper.find('input#book-title');
    expect(title.exists()).toBeTruthy();
  });

  it('should have page count input', () => {
    const wrapper = mount(BookEntry);
    const pages = wrapper.find('input#book-pages');
    expect(pages.exists()).toBeTruthy();
  });
});
