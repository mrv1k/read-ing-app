import { mount } from '@vue/test-utils';
import BookAddNew from '@/components/BookAddNew.vue';

describe('BookAddNew', () => {
  it('should have title input', () => {
    const wrapper = mount(BookAddNew);
    const title = wrapper.find('input#book-title');
    expect(title.exists()).toBeTruthy();
  });

  it('should have page count input', () => {
    const wrapper = mount(BookAddNew);
    const pages = wrapper.find('input#book-pages');
    expect(pages.exists()).toBeTruthy();
  });
});
