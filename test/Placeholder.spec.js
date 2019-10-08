import { mount } from '@vue/test-utils';
import Placeholder from '@/components/Placeholder.vue';

describe('Placeholder', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Placeholder);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
