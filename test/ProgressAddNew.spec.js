import { mount } from '@vue/test-utils';
import ProgressAddNew from '@/components/ProgressAddNew.vue';

describe('ProgressAddNew', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ProgressAddNew);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
