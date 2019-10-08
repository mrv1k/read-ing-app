import { mount } from '@vue/test-utils';
import ProgressViewDay from '@/components/ProgressViewDay.vue';

describe('ProgressViewDay', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ProgressViewDay);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
